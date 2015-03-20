var React = require('react/addons');
var Tap = require('../mixins/tap');
var Router = require('react-router');
var Link = Router.Link;
var AppActions = require('../actions/app-actions');
var SessionActions = require('../actions/session-actions');
var SessionStore = require('../stores/session-store');
var Overlay = require('../components/overlay');

var SideNav = React.createClass({
  mixins: [Tap],
  render: function () {
    return (
      <div className="side-nav">
        <Overlay onTouchTap={this.onOverlayTap}/>

        <aside className="nav-container mui-paper mui-z-depth-3">
          <ul className="nav">
            <li><Link to="dashboard" onTouchTap={this.onLinkTap.bind(this, 'Dashboard')}>Dashboard</Link></li>
            <li><Link to="calendar" onTouchTap={this.onLinkTap.bind(this, 'Calendar')}>Calendar</Link></li>
            <li><Link to="page1" onTouchTap={this.onLinkTap.bind(this, 'Page 1')}>Page 1</Link></li>
            <li><Link to="page2" onTouchTap={this.onLinkTap.bind(this, 'Page 2')}>Page 2</Link></li>
            <li><a href="#" onTouchTap={this.onLogout}>Log out</a></li>
          </ul>
        </aside>

      </div>
    );
  },

  onLinkTap: function(pageName, e) {
    AppActions.changeTitle(pageName);
  },

  onOverlayTap: function() {
    AppActions.closeSideMenu();
  },

  onLogout: function(e) {
    e.preventDefault();
    AppActions.closeSideMenu();
    SessionActions.logout();
  }
});

module.exports = SideNav;
