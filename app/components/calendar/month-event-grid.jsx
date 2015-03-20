var React = require('react/addons');
var moment = require('moment');
var Tap = require('../../mixins/tap');

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'Februrary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

var MonthEventGrid = React.createClass({
  mixins : [Tap],

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

  getFirstSunday: function(date) {
    var day = date.getDay();
    var diff = date.getDate() - day;
    return new Date(new Date(date.getTime()).setDate(diff));
  },

  getWeeks: function(date) {
    var firstDay = moment(date).startOf('month').startOf('week').startOf('day');
    var lastDay = moment(date).endOf('month').endOf('week').startOf('day');
    var days = lastDay.diff(firstDay, 'days');
    var weeks = [];
    var compare = firstDay.clone();

    while (compare.isBefore(lastDay)) {
      var week = [];
      for (var day in WEEKDAYS) {
        week.push(compare.clone().toDate());
        compare.add(1, 'days');
      }
      weeks.push(week);
    }
    return weeks;
  },

  renderWeek: function(week, index) {
    return (
      <div key={index} className="week-row">
        {week.map(this.renderDay)}
      </div>
    );
  },

  renderDay: function(date, index) {
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
    return <div key={index} className={classes} onTouchTap={this.handleDayTouchTap.bind(this, date)}>
      <div className="events-container">

      </div>
    </div>;
  },

  render: function() {
    var weeks = this.getWeeks(this.props.date);
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="event-grid">
        {weeks.map(this.renderWeek)}
      </div>
    );
  },

  handleDayTouchTap: function(date, e) {
    // console.log(e, date, arguments);
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }
});

module.exports = MonthEventGrid;
