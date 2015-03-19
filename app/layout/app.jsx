var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SideNav = require('./side-nav');
var Header = require('./header');
var SessionStore = require('../stores/session-store');

var App = React.createClass({
  mixins: [Router.Navigation, Router.State],

  getInitialState: function() {
    return {
      title: 'App',
      isSideMenuOpen: false
    };
  },

  statics: {
    attemptedTransition: null,

    willTransitionTo: function(transition) {
      if (SessionStore.isLoggedIn()) {

      } else {
        this.attemptedTransition = transition;
        transition.redirect('loggedout');
      }
    }
  },

	render: function() {
    var classes = React.addons.classSet({
      'app': true,
      'menu-open': this.state.isSideMenuOpen
    });
		return (
			<section className={classes}>
				<Header title={this.state.title} toggleSideMenu={this.toggleSideMenu}/>

				<SideNav changeTitle={this.changeTitle} logout={this.logout}/>

				<RouteHandler />
			</section>
		);
  },

  toggleSideMenu: function(e) {
    e.preventDefault();
    this.setState({
      isSideMenuOpen: ! this.state.isSideMenuOpen
    });

  },

  changeTitle: function(title, e) {
    console.log('changeTitle', arguments);
    this.setState({ title: title, isSideMenuOpen: false });
  },

  logout: function(e) {
    SessionStore.logout();
    if (App.attemptedTransition) {
      var transition = App.attemptedTransition;
      App.attemptedTransition = null;
      transition.retry();
    } else {
      this.replaceWith('loggedout');
    }
  }
});

module.exports = App;
