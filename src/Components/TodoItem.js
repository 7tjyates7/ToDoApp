import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            backgroundColor: this.props.todo.completed ?
            'lightgreen' : 'white',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    todaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy; 
        return today
    }

    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input 
                        type="checkbox" 
                        onChange={this.props.markComplete.bind(this, this.props.todo.id)} 
                    /> 
                    {' '} {this.props.todo.title} 
                    {' '}| Due Date: {this.props.todo.dueDate}
                    {' '}| Current Date: {this.todaysDate()}
                    <button 
                        onClick={this.props.delTodo.bind(this,this.props.todo.id)} 
                        style={btnstyle}
                    >
                        Delete
                    </button>
                </p>
            </div>
        )
    }
}

//PropType Reqs
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}
const btnstyle = {
    background: 'grey',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
