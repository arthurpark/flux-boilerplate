var React = require('react/addons');
var md5 = require('MD5');
var BASE = 'http://www.gravatar.com/avatar/';

var Gravatar = React.createClass({

  propTypes: {
    email: React.PropTypes.string.isRequired
  },

  render: function() {
    var url = BASE + md5(this.props.email);

    return (
      <span className="gravatar">
        <img className="mui-paper gravatar-img" src={url} alt={this.props.email} />
      </span>
    );
  }
});

module.exports = Gravatar;