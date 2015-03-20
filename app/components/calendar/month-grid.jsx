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

  render: function() {
    var weeks = this.getWeeks(this.props.date);
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="month-grid">
        {weeks.map(this.renderWeek)}
      </div>
    );
  },

  renderWeek: function(week, index) {
    var me = this;
    return (
      <div key={index} className="week-row">
        {week.map(function(date, dayIndex) {
          return me.renderDay(date, dayIndex, index);
        })}
      </div>
    );
  },

  renderDay: function(date, index, weekIndex) {
    var today = new Date();
    var cx = React.addons.classSet;
    var classes = cx({
      'day-cell': true,
      'current-month': (date.getMonth() === this.props.date.getMonth()),
      'today': (date.toDateString() === today.toDateString()),
      'selected': (date.toDateString() === this.props.selected.toDateString())
    });

    var weekDay = <span className="week-day">{WEEKDAYS[index]}</span>;

    return <div key={index} className={classes}>
      <div className="date-label">
        {(weekIndex === 0) ? weekDay : ''}
        <span className="date">{date.getDate()}</span>
      </div>
    </div>;
  },

  _handleDayTouchTap: function(e, date) {
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }
});

module.exports = MonthGrid;
