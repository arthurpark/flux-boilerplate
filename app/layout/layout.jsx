var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Layout = React.createClass({

	render: function() {
		return (
			<section className="layout">
				<RouteHandler />
			</section>
		);
  }
});

module.exports = Layout;
