var React = require('react/addons');

var List = React.createClass({

  render: function() {
    return (
      <ul className="list">
        {this.props.children}
      </ul>
    );
  }
});

module.exports = List;