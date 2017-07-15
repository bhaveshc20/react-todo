var React = require('react');
import { Button, Card, Row, Col } from 'react-materialize';

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
            <div className="container center">
                <form ref="form" onSubmit={this.handleSubmit}>
                  <div className="input-field">
                  <input className="validate" type="text" ref="todoText" placeholder="What do you need to do?"></input>
                  </div>
                  <Button floating large pulse className="orange darken-1" waves="light" icon="add"/>
                </form>
            </div>

        );
    }
});

module.exports = AddTodo;
