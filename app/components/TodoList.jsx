var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if(todos.length === 0){
        return (
          <h5 className="container__message animated fadeInRight">Nothing To Do</h5>
        );
      }
      return todos.map((todo) => {
        return (
            <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
        );
      });
    };

    return(
      <div className="container">
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
