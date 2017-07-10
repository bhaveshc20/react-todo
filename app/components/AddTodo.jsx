var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e){
      e.preventDefault();
      var todoText = this.refs.todoText.value;
      if(todoText.length > 0){
        this.refs.todoText.value = '';
        this.props.onAddTodo(todoText);
      } else{
        this.refs.todoText.focus();
      }
      // var strSeconds = this.refs.seconds.value;
      // if(strSeconds.match(/^[0-9]*$/)){
      //   this.refs.seconds.value = '';
      //   this.props.onSetCountdown(parseInt(strSeconds, 10))
    },
    render: function() {
        return (
            <div className="container__footer">
                <form ref="form" onSubmit={this.handleSubmit}>
                  <input type="text" ref="todoText" placeholder="What do you need to do?"></input>
                  <button className="button expanded">Add todo</button>
                </form>
            </div>

        );
    }
});

module.exports = AddTodo;
