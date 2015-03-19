var React = require('react/addons');
var SessionStore = require('../stores/session-store');
var AppActions = require('../actions/app-actions');
var mui = require('material-ui');
// var IconButton = mui.IconButton; <IconButton iconClassName="mega-octicon octicon-three-bars" onClick={this.props.toggleSideMenu}/>
var FlatButton = mui.FlatButton;
var Gravatar = require('../components/gravatar');

var Header = React.createClass({
	render: function() {
		return (
			<header className="header mui-paper mui-z-depth-4">
        <div className="toolbar toolbar-left">
          <a className="btn menu-btn" onClick={this.onMenuClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"><path d="M4 27h28v-3H4v3zm0-8h28v-3H4v3zM4 8v3h28V8H4z"/></svg>
          </a>
          <h1 className="title">{this.props.title}</h1>
        </div>
        <div className="toolbar toolbar-middle flex">
        </div>
        <div className="toolbar toolbar-right">
          <Gravatar email={SessionStore.getEmail()} />
        </div>
			</header>
		)
	},

  onMenuClick: function(e) {
    AppActions.toggleSideMenu();
  }
});

// <FlatButton label="M" onClick={this.props.toggleSideMenu}/>

module.exports = Header;
