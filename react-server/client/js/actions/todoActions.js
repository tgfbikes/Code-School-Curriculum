'use strict';

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');


var TodoActions = {
  getAllTodos: function () {
    // Call API
    var todos = 

    Dispatcher.dispatch({
      actionType: ActionTypes.GET_ALL_TODOS,
      data: todos
    })
  }
};