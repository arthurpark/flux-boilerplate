var React = require('react/addons');
var mui = require('material-ui');
// var IconButton = mui.IconButton;
var FlatButton = mui.FlatButton;

var Header = React.createClass({
	render: function () {
		return (
			<header className="header mui-paper mui-z-depth-4">
        <FlatButton label="M" onClick={this.props.toggleSideMenu}/>
        <h1 className="title">{this.props.title}</h1>
			</header>
		)
	}
});

module.exports = Header;
