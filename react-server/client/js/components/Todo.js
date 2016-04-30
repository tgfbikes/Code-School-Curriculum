'use strict';

var React    = require('react');
var TodoList = require('./TodoList');
var TodoForm = require('./TodoForm');
var ajax     = require('../helpers/ajax');

var Todo = React.createClass({

  getInitialState: function() {
    return {
      inputs: {
        title: {
          type: 'text',
          id: 'title',
          name: 'title',
          value: '',
          className: 'form-control',
          placeholder: 'Title',
        },
        description: {
          type: 'text',
          id: 'description',
          name: 'description',
          value: '',
          className: 'form-control',
          placeholder: 'Description',
        }
      },
      todos: [
        // {
        //   title: 'Stop shaving',
        //   description: 'To look hip',
        //   done: false
        // },
        // {
        //   title: 'Don\'t cut hair',
        //   description: 'To also look hip',
        //   done: false
        // },
        // {
        //   title: 'Wear coding shirts',
        //   description: 'Everyone must know we code',
        //   done: false
        // },
        // {
        //   title: 'Use big words to sound smart',
        //   description: 'ie polymorphism and interpolation',
        //   done: false
        // }
      ]
    }
  },

  componentWillMount: function () {
    var that = this;                // Need to keep context of the Todo component in our success and error callbacks
    var url = '/api/todos.json';    // Path to get all todos from data base
    var data = {};
    var success = function(data) {  // Ok, data is an object with objects inside i.e. { {...}, {...}, ... }
      var updatedTodos = Object.assign([], that.state.todos); // We don't want to directly mess with todos on state
      
      for (var key in data) {                   // We iterate over the main object 'data' to get access to the other objects
        if (data.hasOwnProperty(key)) {         // Convention for making sure we don't pull any data from prototype
          var todoData = data[key];             // Grap the object at data[key] -- key will be the place the object is located
          var todo = {                          // Create a new todo object literal from each object in data object
            id: todoData._id,
            title: todoData.title,
            description: todoData.description,
            done: todoData.done
          };
          updatedTodos.push(todo);              // Each todo we create, we want to push to updatedTodos
        }
      }
      
      that.setState({  // Set state which will cause a re-render, and we have our data from the DB, I'm excited
        todos: updatedTodos
      });
      
    };
    var error = function (xhr, status, err) {
      console.log(err);
    };
    
    ajax(url, data, success, error, 'GET');    // Need to specify 'GET' since type default is 'POST'
  },

  handleInputChange: function(evt) {
    var newInputs = Object.assign({}, this.state.inputs);
    newInputs[evt.target.name].value = evt.target.value;
    this.setState({
      inputs: newInputs
    });
  },

  addTodo: function(evt) {
    evt.preventDefault();

    var newTodos = Object.assign([], this.state.todos);
    var resetInputs = Object.assign({}, this.state.inputs);

    var newTodo = {
      title: this.state.inputs.title.value,
      description: this.state.inputs.description.value,
      done: false
    };
    resetInputs.title.value = '';
    resetInputs.description.value = '';

    newTodos.push(newTodo);
    this.setState({
      todos: newTodos,
      inputs: resetInputs
    });
  },

  deleteTodo: function(index) {
    var updatedTodos = Object.assign([], this.state.todos);

    console.log('delete todo');
    updatedTodos.splice(index, 1);
    this.setState({
      todos: updatedTodos
    });
  },

  completedTodo: function(index) {
    var updatedTodos = Object.assign([], this.state.todos);

    console.log('completed todo');
    updatedTodos[index].done = true;
    this.setState({
      todos: updatedTodos
    });

  },


  render: function() {
    return (
     <div className="container">
       <div className="row">
         <TodoForm
           addTodo={this.addTodo}
           inputConfig={this.state.inputs}
           changeHandler={this.handleInputChange}
         />
         <TodoList
           todos={this.state.todos}
           completedTodo={this.completedTodo}
           deleteTodo={this.deleteTodo}
         />
       </div>
     </div>
    );
  }
});

module.exports = Todo;
