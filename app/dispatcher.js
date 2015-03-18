Dispatcher = require('flux').Dispatcher;
assign = require('object-assign');

var dispatcher = assign(new Dispatcher(), {

  handleServerAction: function(action) {
    this.dispatch({
      source: 'SERVER',
      action: action
    })
  },

  handleViewAction: function(action) {
    this.dispatch({
      source: 'VIEW',
      action: action
    })
  }
});

module.exports = dispatcher;