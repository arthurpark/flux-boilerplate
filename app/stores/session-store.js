var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var dispatcher = require('../dispatcher');


var SessionStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.off('change', callback)
  },

  login: function(params) {
    localStorage.setItem('session', JSON.stringify(params));
  },

  logout: function() {
    if (localStorage.getItem('session')) {
      localStorage.removeItem('session');
    }
  },

  isLoggedIn: function() {
    if (localStorage.getItem('session')) {
      return true;
    } else {
      return false;
    }
  }

  // getAll: -> users

  // get: (id) ->
  //   user = users.find (user, index, arr) ->
  //     return user.ID is id
  //   user


  // search: (token, attr) ->
  //   token = token.toLowerCase()
  //   attr = 'Name' unless attr?
  //   return users.filter (user) ->
  //     name = user[attr].toLowerCase()
  //     return name.indexOf(token) > -1

});

// UserStore.dispatchToken = dispatcher.register (payload) ->
//   actions = {
//     loadConnections: (payload) ->
//       users = payload.action.connections
//       UserStore.emit('change')
//   }

//   actions[payload.action.type] && actions[payload.action.type](payload)

module.exports = SessionStore;