var React = require('react/addons');
var Month = require('../components/calendar/month');

var CalendarPage = React.createClass({

  getInitialState: function() {
    return {
      today: new Date()
    };
  },

  render: function() {
    // console.log(this.state.today.getMonth());

    return (
      <div className="page calendar-page">
        <header className="tabs">

        </header>

        <section className="">
          <Month date={this.state.today}/>
        </section>
      </div>
    );
  }
});

module.exports = CalendarPage;
