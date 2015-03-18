var React = require('react/addons');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
// Layouts
var Layout = require('./layout/layout');
var App = require('./layout/app');
var LoggedOut = require('./layout/logged-out');
// Pages
var LoginPage = require('./pages/login-page');
var Page1 = require('./pages/page-1');
var Page2 = require('./pages/page-2');

module.exports = (
  <Route handler={Layout} path="/">

    <Route name="loggedout" path="/home" handler={LoggedOut}>
      <Route name="login" path="/login" handler={LoginPage} />
      <DefaultRoute handler={LoginPage} />
      <NotFoundRoute handler={LoginPage} />
    </Route>

    <Route name="app" path="/" handler={App}>
      <Route name="page1" path="page1" handler={Page1} />
      <Route name="page2" path="page2" handler={Page2} />
      <DefaultRoute handler={Page1} />
    </Route>

  </Route>
);