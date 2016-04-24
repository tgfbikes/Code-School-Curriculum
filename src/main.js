$ = jQuery = require('jquery');
var React = require('react');
var TodoList = require('./components/TodoList');

 var App = React.createClass({
   render: function() {
     return (
       <div>
         <TodoList />
       </div>
     );
   }
 });

 React.render(<App />, document.getElementById('app'));
