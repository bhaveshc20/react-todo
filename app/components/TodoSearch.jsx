var React = require('react');
import { Button, Card, Row, Col, Input } from 'react-materialize';

var TodoSearch = React.createClass({
  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);
  },
    render: function() {
        return (
            <div className="container__header">
                <div className="container">
                  <div className="input-field">
                    <i className="large material-icons prefix">search</i>
                    <input id="icon_prefix" type="search" ref="searchText" placeholder="Search To-do" onChange={this.handleSearch}/>

                  </div>

                </div>
                <div className="container">
                  <Row className="container__todos">
                    <label>
                     <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                     Show completed todos
                   </label>
                  </Row>

                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;
