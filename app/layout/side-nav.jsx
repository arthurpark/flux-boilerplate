var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var AppActions = require('../actions/app-actions');
var SessionActions = require('../actions/session-actions');
var SessionStore = require('../stores/session-store');
var Overlay = require('../components/overlay');

var SideNav = React.createClass({
  render: function () {
    return (
      <div className="side-nav">
        <Overlay onClick={this.onOverlayClick}/>

        <aside className="nav-container mui-paper mui-z-depth-3">
          <ul className="nav">
            <li><Link to="dashboard" onClick={this.onLinkClick.bind(this, 'Dashboard')}>Dashboard</Link></li>
            <li><Link to="calendar" onClick={this.onLinkClick.bind(this, 'Calendar')}>Calendar</Link></li>
            <li><Link to="page1" onClick={this.onLinkClick.bind(this, 'Page 1')}>Page 1</Link></li>
            <li><Link to="page2" onClick={this.onLinkClick.bind(this, 'Page 2')}>Page 2</Link></li>
            <li><a href="#" onClick={this.onLogout}>Log out</a></li>
          </ul>
        </aside>

      </div>
    );
  },

  onLinkClick: function(pageName, e) {
    AppActions.changeTitle(pageName);
  },

  onOverlayClick: function() {
    AppActions.closeSideMenu();
  },

  onLogout: function(e) {
    e.preventDefault();
    AppActions.closeSideMenu();
    SessionActions.logout();
  }
});

module.exports = SideNav;
