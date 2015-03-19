var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var AppStore = require('../stores/app-store');
var SessionStore = require('../stores/session-store');

var SideNav = require('./side-nav');
var Header = require('./header');

var App = React.createClass({
  mixins: [Router.Navigation, Router.State],

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

  getInitialState: function() {
    return {
      title: AppStore.getTitle(),
      isSideMenuOpen: AppStore.isSideMenuOpen()
    };
  },

  componentWillMount: function() {
    AppStore.addChangeListener(this.onAppStoreChange);
    SessionStore.addChangeListener(this.onSessionStoreChange);
  },

  componentWillUnmount: function() {
    AppStore.removeChangeListener(this.onAppStoreChange);
    SessionStore.removeChangeListener(this.onSessionStoreChange);
  },

  render: function() {
    var classes = React.addons.classSet({
      'app': true,
      'menu-open': this.state.isSideMenuOpen
    });
    return (
      <section className={classes}>
        <Header title={this.state.title} toggleSideMenu={this.toggleSideMenu}/>

        <SideNav />

        <RouteHandler />
      </section>
    );
  },

  onAppStoreChange: function() {
    this.setState({
      title: AppStore.getTitle(),
      isSideMenuOpen: AppStore.isSideMenuOpen()
    });
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

  // This means logging out.
  onSessionStoreChange: function() {
    if (! SessionStore.isLoggedIn()) {
      if (App.attemptedTransition) {
        var transition = App.attemptedTransition;
        App.attemptedTransition = null;
        transition.retry();
      } else {
        this.replaceWith('loggedout');
      }
    }
  }
});

module.exports = App;
