var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SessionStore = require('../stores/session-store');

var LoggedOut = React.createClass({
  mixins: [Router.Navigation, Router.State],

  statics: {
    attemptedTransition: null,

    willTransitionTo: function(transition) {
      if (SessionStore.isLoggedIn()) {
        this.attemptedTransition = transition;
        transition.redirect('app');
      }
    }
  },

  componentWillMount: function() {
    SessionStore.addChangeListener(this.onSessionStoreChange);
  },

  componentWillUnmount: function() {
    SessionStore.removeChangeListener(this.onSessionStoreChange);
  },

	render: function() {
		return (
			<RouteHandler />
		);
  },

  onSessionStoreChange: function() {
    if (SessionStore.isLoggedIn()) {
      if (LoggedOut.attemptedTransition) {
        var transition = LoggedOut.attemptedTransition;
        LoggedOut.attemptedTransition = null;
        transition.retry();
      } else {
        this.replaceWith('app');
      }
    }
  }
});

module.exports = LoggedOut;
