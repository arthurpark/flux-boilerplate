var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var SessionStore = require('../stores/session-store');
var Overlay = require('../components/overlay');

var SideNav = React.createClass({
	render: function () {
		return (
			<div className="side-nav">
				<Overlay />

				<aside className="nav-container mui-paper mui-z-depth-3">
					<ul className="nav">
						<li><Link to="dashboard" onClick={this.props.changeTitle.bind(null, 'Dashboard')}>Dashboard</Link></li>
						<li><Link to="page1" onClick={this.props.changeTitle.bind(null, 'Page 1')}>Page 1</Link></li>
	          <li><Link to="page2" onClick={this.props.changeTitle.bind(null, 'Page 2')}>Page 2</Link></li>
	          <li><a href="#" onClick={this.props.logout}>Log out</a></li>
					</ul>
				</aside>

			</div>
		)
	}
});

module.exports = SideNav;
