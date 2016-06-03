'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT = 'change';

var _todos = [];

var TodoStore = Object.assign({}, EventEmitter.prototype, {
  
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  }
  
});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.GET_ALL_TODOS:
      _todos.push(action.data);
      TodoStore.emitChange();
  }
});

module.exports = TodoStore;