
$ = jQuery = require('jquery');
var React = require('react');
var TodoList = require('./components/TodoList');
var TodoForm = require('./components/TodoForm');

var App = React.createClass({
 render: function() {
   return (
     <div className="container">
       <div className="row">
         <TodoForm />
         <TodoList />
       </div>
     </div>
   );
 }
});

React.render(<App />, document.getElementById('app'));
