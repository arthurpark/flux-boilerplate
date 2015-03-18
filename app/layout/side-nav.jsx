var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var SideNav = React.createClass({
	render: function () {
		return (
			<aside className="side-nav mui-paper mui-z-depth-3">
				<ul className="nav">
					<li><Link to="page1" onClick={this.props.changeTitle.bind(null, 'Page 1')}>Page 1</Link></li>
          <li><Link to="page2" onClick={this.props.changeTitle.bind(null, 'Page 2')}>Page 2</Link></li>
				</ul>
			</aside>
		)
	}
});

module.exports = SideNav;
