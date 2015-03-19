var React = require('react/addons');
var List = require('../components/list');

var DashboardPage = React.createClass({
  render: function() {
    var items = [
      "React", "Flux", "Facebook"
    ];
    return (
      <div className="page page-1">
        <List items={items} />
      </div>
    );
  }
});

module.exports = DashboardPage;
