var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('../dispatcher');


var SessionStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    // Somehow off doesn't exits.. :(
    // this.off('change', callback);
    this.removeListener('change', callback);
  },

  isLoggedIn: function() {
    if (localStorage.getItem('session')) {
      return true;
    } else {
      return false;
    }
  },

  getEmail: function() {
    return JSON.parse(localStorage.getItem('session')).email;
  }

});

SessionStore.dispatchToken = dispatcher.register(function(payload) {
  var actions = {
    login: function(payload) {
      localStorage.setItem('session', JSON.stringify(payload.action.params));
      SessionStore.emit('change');
    },

    logout: function(payload) {
      if (localStorage.getItem('session')) {
        localStorage.removeItem('session');
      }

      SessionStore.emit('change');
    }
  };

  actions[payload.action.type] && actions[payload.action.type](payload);

});

module.exports = SessionStore;