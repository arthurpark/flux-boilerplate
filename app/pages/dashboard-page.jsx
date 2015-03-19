var React = require('react/addons');
var Card = require('../components/card');

var DashboardPage = React.createClass({
  render: function() {
    var items = [
      "React", "Flux", "Facebook"
    ];

    return (
      <div className="page page-1">
        <div className="list">
          {items.map(function(elem, index, list) {
            return (
              <Card key={index}>
                <header className="card-header">
                  {elem}
                </header>
                <section className="card-content">
                  {elem}
                </section>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
});

module.exports = DashboardPage;
