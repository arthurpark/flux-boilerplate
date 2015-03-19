var dispatcher = require('../dispatcher');

var SessionActions = {
  login: function(params) {
    dispatcher.handleServerAction({
      type: 'login',
      params: params
    });
  },

  logout: function(newTitle) {
    dispatcher.handleServerAction({
      type: 'logout'
    });
  }
};

module.exports = SessionActions;