var React = require('react/addons');
var moment = require('moment');
var MonthGrid = require('./month-grid');
var MonthEventGrid = require('./month-event-grid');
var Tap = require('../../mixins/tap');

const MONTHS = [
  'January', 'Februrary', 'March', 'April', 'May', 'June', 'July',
  'August', 'September', 'October', 'November', 'December'];

var Month = React.createClass({
  mixins : [Tap],

  propTypes: {
    date: React.PropTypes.instanceOf(Date).isRequired
  },

  getInitialState: function() {
    var date = this.props.date;
    return {
      date: date,
      selected: date
    };
  },

  render: function() {
    var date = this.state.date;
    var today = new Date();
    var isCurrentMonth = (date.getMonth() === today.getMonth());
    return(
      <div className="month">
        <header className={isCurrentMonth ? "month-header current-month" : "month-header"}>
          <span className="nav-btn" onTouchTap={this.showPreviousMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
          </span>

          <div className="month-label">
            <span className="month-name">{MONTHS[date.getMonth()]}</span>
            &nbsp;
            <span className="year">{date.getFullYear()}</span>
          </div>

          <span className="nav-btn" onTouchTap={this.showNextMonth}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
          </span>
        </header>
        <section className="month-body">
          <MonthGrid date={date} selected={this.state.selected} />
          <MonthEventGrid date={date} onDayTouchTap={this.handleDayTouchTap}/>
        </section>
      </div>
    );
  },

  handleDayTouchTap: function(e, date) {
    // console.log(e, date);
    // if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
    this.setState({ selected: date});
  },

  showPreviousMonth: function(e) {
    var date = new Date(this.state.date.getTime());
    date.setMonth(date.getMonth() - 1);
    this.setState({ date: date});
  },

  showNextMonth: function(e) {
    var date = new Date(this.state.date.getTime());
    date.setMonth(date.getMonth() + 1);
    this.setState({ date: date});
  }


});

module.exports = Month;
