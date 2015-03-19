var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('../dispatcher');

var title = 'App';

var isSideMenuOpen = false;

// Responsible for global application state
var AppStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    // Somehow off doesn't exits.. :(
    // this.off('change', callback);
    this.removeListener('change', callback);
  },

  getTitle: function() {
    return title;
  },

  isSideMenuOpen: function() {
    return isSideMenuOpen;
  }
});

AppStore.dispatchToken = dispatcher.register(function(payload) {
  var actions = {
    toggleSideMenu: function(payload) {
      isSideMenuOpen = ! isSideMenuOpen;
      AppStore.emit('change');
    },

    changeTitle: function(payload) {
      title = payload.action.newTitle;
      isSideMenuOpen = false;
      AppStore.emit('change');
    }
  };

  actions[payload.action.type] && actions[payload.action.type](payload);

});

module.exports = AppStore;