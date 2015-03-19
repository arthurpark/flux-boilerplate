var dispatcher = require('../dispatcher');

var AppActions = {
  toggleSideMenu: function() {
    dispatcher.handleViewAction({
      type: 'toggleSideMenu'
    });
  },

  closeSideMenu: function() {
    dispatcher.handleViewAction({
      type: 'closeSideMenu'
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