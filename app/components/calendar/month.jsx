var React = require('react/addons');
var moment = require('moment');
var MonthGrid = require('./month-grid');
var MonthEventGrid = require('./month-event-grid');

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

  render: function() {
    var today = new Date();
    var isCurrentMonth = this.props.date.getMonth() === today.getMonth();
    return(
      <div className="month">
        <header className={isCurrentMonth ? "month-header current-month" : "month-header"}>
          <span className="month-name">{MONTHS[this.props.date.getMonth()]}</span>
          &nbsp;
          <span className="year">{this.props.date.getFullYear()}</span>
        </header>
        <section className="month-body">
          <MonthGrid date={this.props.date} selected={this.state.selected} />
          <MonthEventGrid date={this.props.date} onDayTouchTap={this._handleDayTouchTap}/>
        </section>
      </div>
    );
  },

  _handleDayTouchTap: function(e, date) {
    // console.log(e, date);
    // if (this.props.onDayTouchTap) this.props.onDayTouchTap(e, date);
    this.setState({ selected: date});
  }
});

module.exports = Month;
