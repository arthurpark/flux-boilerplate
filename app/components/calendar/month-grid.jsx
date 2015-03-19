var React = require('react/addons');
var moment = require('moment');

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January', 'Februrary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

var MonthGrid = React.createClass({
  // mixins : [],

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    onDayTouchTap: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      selected: new Date()
    };
  },

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

  render: function() {
    console.log(this.props.selected);
    var weeks = this._getWeeks(this.props.date);
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="month-grid">
        {weeks.map(this._renderWeek)}
      </div>
    );
  },

  _renderWeek: function(week, index) {
    var me = this;
    return (
      <div key={index} className="week-row">
        {week.map(function(date, dayIndex) {
          return me._renderDay(date, dayIndex, index);
        })}
      </div>
    );
  },

  _renderDay: function(date, index, weekIndex) {
    var today = new Date();
    var isCurrentMonth = date.getMonth() === today.getMonth();
    var classes = 'day-cell';
    var isToday = date.toDateString() === today.toDateString();
    var isSelected = date.toDateString() === this.props.selected.toDateString();
    if (isCurrentMonth) {
      classes += ' current-month'
      if (isToday) {
        classes += ' today';
      }
    }

    if (isSelected) {
      classes += ' selected';
    }

    var weekDay = <span className="week-day">{WEEKDAYS[index]}</span>;

    return <div key={index} className={classes}>
      <div className="date-label">
        {(weekIndex === 0) ? weekDay : ''}
        <span className="date">{date.getDate()}</span>
      </div>
    </div>;
  },

  _handleDayTouchTap: function(e, date) {
    console.log(e, date);
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }
});

module.exports = MonthGrid;
