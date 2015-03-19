var React = require('react/addons');

var Overlay = React.createClass({

  propTypes: {
    onClick: React.PropTypes.func
  },

  render: function() {
    return (
      <div className="overlay" {...this.props}></div>
    );
  }
});

module.exports = Overlay;