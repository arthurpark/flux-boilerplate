var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var LoginPage = React.createClass({
  displayName: "LoginPage",

  mixins: [ Router.Navigation ],

  statics: {
    attemptedTransition: null
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
          <h1>Enter handle to start</h1>
          <form onSubmit={this.onSubmit}>
            <div className={handleClasses}>
              <label>Handle</label>
              <input type="text" ref="handle" onChange={this.onHandleChange} />
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

  onHandleChange: function(e) {
    this.setState({ handle: e.target.value });
  },

  onSubmit: function(e) {
    e.preventDefault();
    var handle = this.refs.handle.getDOMNode().value;

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
