var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var LoggedOut = React.createClass({
	render: function() {
		return (
			<RouteHandler />
		);
  }
});

module.exports = LoggedOut;
