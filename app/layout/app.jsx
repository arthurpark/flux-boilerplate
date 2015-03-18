var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var SideNav = require('./side-nav');
var Header = require('./header');

var App = React.createClass({
  getInitialState: function() {
    return {
      title: 'App',
      isSideMenuOpen: false
    };
  },

	render: function() {
    var classes = React.addons.classSet({
      'app': true,
      'menu-open': this.state.isSideMenuOpen
    });
		return (
			<section className={classes}>
				<Header title={this.state.title} toggleSideMenu={this.toggleSideMenu}/>

				<SideNav changeTitle={this.changeTitle}/>

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
    this.setState({ title: title });
  }
});

module.exports = App;
