var dispatcher = require('../dispatcher');

var AppActions = {
  toggleSideMenu: function() {
    dispatcher.handleViewAction({
      type: 'toggleSideMenu'
    });
  },

  changeTitle: function(newTitle) {
    dispatcher.handleViewAction({
      type: 'changeTitle',
      newTitle: newTitle
    });
  }
};

module.exports = AppActions;