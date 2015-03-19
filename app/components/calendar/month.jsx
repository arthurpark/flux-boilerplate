var React = require('react/addons');

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTHS = [
  'January', 'Februrary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

var Month = React.createClass({
  // mixins : [],

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired,
    onDayTouchTap: React.PropTypes.func
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
    var me = this;
    if (this.state.isCurrentMonth) {
      return (
        <tr key={index}>
          {week.map(function(date, dayIndex) {
            return <td key={dayIndex} className={date.toDateString() === new Date().toDateString() ? 'day today' : 'day'}>
              <div className="day-wrapper" onClick={me._handleDayTouchTap.bind(null, date)}>{date.getDate()}</div>
            </td>;
          })}
        </tr>
      );
    } else {
      return (
        <tr key={index}>
          {week.map(function(date, dayIndex) {
            return <td key={dayIndex} className="day">
              <div className="day-wrapper" onClick={me._handleDayTouchTap.bind(null, date)}>{date.getDate()}</div>
            </td>;
          })}
        </tr>
      );
    }

  },

  render: function() {
    var me = this;
    var weeks = this._getWeeks(this.props.date);
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="month">
        <header className={isCurrentMonth ? "month-header current-month" : "month-header"}>
          <span className="month-name">{MONTHS[me.props.date.getMonth()]}</span>
          &nbsp;
          <span className="year">{me.props.date.getFullYear()}</span>
        </header>

        <table className="month-grid">
          <thead>
            <tr>
              {WEEKDAYS.map(function(day, index) {
                return <th className="day day-name" key={index}>
                  <div className="day-wrapper">{day}</div>
                </th>
              })}
            </tr>
          </thead>
          <tbody>
            {weeks.map(me._renderWeek)}
          </tbody>
        </table>
      </div>
    );
  },

  _handleDayTouchTap: function(e, date) {
    console.log(e, date);
    if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
  }
});

module.exports = Month;
