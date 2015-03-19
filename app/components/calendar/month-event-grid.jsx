var React = require('react/addons');
var moment = require('moment');

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'Februrary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

var MonthEventGrid = React.createClass({
  // mixins : [],

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    onDayTouchTap: React.PropTypes.func,
    events: React.PropTypes.array
  },

  getInitialState: function() {
    var date = this.props.date;
    return {
      selected: date
    };
  },

  // getDefaultProps: function() {},

  // componentDidMount: function() {},

  _getFirstSunday: function(date) {
    var day = date.getDay();
    var diff = date.getDate() - day;
    return new Date(new Date(date.getTime()).setDate(diff));
  },

  _getWeeks: function(date) {
    var weeks = [];
    var month = date.getMonth();
    var daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
    var daysPrevMonth = new Date(date.getFullYear(), month - 1, 0).getDate();
    var firstDay = new Date(date.getFullYear(), month, 1);
    var firstSunday = this._getFirstSunday(firstDay);

    // Show 6 weeks for every month
    for (var i = 0; i < 6; i++) {
      var week = [];
      for (var j = 0; j < 7; j++) {
        var dayFromFirstSunday = i* 7 + j + 1;
        week.push(new Date(new Date(firstSunday.getTime()).setDate(dayFromFirstSunday)));
      }
      weeks.push(week);
    }
    return weeks;
  },

  _renderWeek: function(week, index) {
    return (
      <div key={index} className="week-row">
        {week.map(this._renderDay)}
      </div>
    );
  },

  _renderDay: function(date, index) {
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    var clasess = '';
    var isToday = date.toDateString() === today.toDateString();
    if (isCurrentMonth) {
      if (isToday) {
        classes = 'day-cell current-month today';
      } else {
        classes = 'day-cell current-month';
      }
    } else {
      classes = 'day-cell';
    }
    return <div key={index} className={classes} onClick={this._handleDayTouchTap.bind(this, date)}>
      <div className="events-container">

      </div>
    </div>;
  },

  render: function() {
    var weeks = this._getWeeks(this.props.date);
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="event-grid">
        {weeks.map(this._renderWeek)}
      </div>
    );
  },

  _handleDayTouchTap: function(date, e) {
    // console.log(e, date, arguments);
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }
});

module.exports = MonthEventGrid;
