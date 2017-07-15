var React = require('react');
var moment = require('moment');
import { Button, Card, Row, Col, Input } from 'react-materialize';

var Todo = React.createClass({
  render: function(){
    var {id, text, completed, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if(completed){
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
    }
    return(
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id);
        }}>
        <div className="row animated fadeInLeft"><div className="col s6"><Input name="group1" type="checkbox" label={text} checked={completed} defaultValue="checked" /></div>
        <div className="col s6">
        <p className="todo__subtext">{renderDate()}</p></div>
</div>
      </div>
    )
  }
});

module.exports = Todo;
