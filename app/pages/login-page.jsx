var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var SessionStore = require('../stores/session-store');

var LoginPage = React.createClass({
  displayName: "LoginPage",

  mixins: [ Router.Navigation, Router.State ],

  statics: {
    attemptedTransition: null,
    willTransitionTo: function(transition) {
      if (SessionStore.isLoggedIn()) {
        this.attemptedTransition = transition;
        transition.redirect('app');
      }
    }
  },

  getInitialState: function() {
    return {
      errors: null
    }
  },

  render: function() {
    var errors;
    if (this.state.error) {
      errors = (<p>Bad login information</p>);
    } else {
      errors = '';
    }
    var handleError = this.state.errors ? this.state.errors.password : false;

    var handleClasses = React.addons.classSet({
      'input-group': true,
      'mui-has-error': handleError
    });

    return (
      <div className="page login-page mui-paper mui-z-depth-4">
        <div className="centered">
          <h1>Enter email to start</h1>
          <form onSubmit={this.onSubmit}>
            <div className={handleClasses}>
              <input type="email" ref="email" onChange={this.onEmailChange} placeholder="example@abc.com" />
              <span className="mui-input-error">{handleError}</span>
            </div>
            <div className="actions">
              <button type="subumit" className="mui-raised-button" onClick={this.handleLogin}>Log in</button>
            </div>
          </form>
        </div>
      </div>
    )
  },

  onEmailChange: function(e) {
    // validate
    this.setState({ email: e.target.value });
  },

  onSubmit: function(e) {
    e.preventDefault();
    var email = this.refs.email.getDOMNode().value;

    // validate


    // login
    SessionStore.login({ email: email });

    // TODO: Try login then do the following
    if (LoginPage.attemptedTransition) {
      var transition = LoginPage.attemptedTransition;
      LoginPage.attemptedTransition = null;
      transition.retry();
    } else {
      this.replaceWith('app');
    }
  }

});

module.exports = LoginPage;
