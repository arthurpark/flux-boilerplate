var React = require('react/addons');

var List = React.createClass({

  propTypes: {
    items: React.PropTypes.array
  },

  render: function() {
    return (
      <ul className="list">
        {this.props.items.map(function(element, index, arr) {
          return (
            <li className="list-item" key={index}>
              {element}
            </li>
          );
        })}
      </ul>
    );
  }
});

module.exports = List;