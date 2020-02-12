import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
        dueDate: '',
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title, this.state.dueDate);
        this.setState({title: '', dueDate: ''})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input 
                    type="text" 
                    name="title" 
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add To-Do ..." 
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input 
                    type="text" 
                    name="dueDate" 
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add Due Date ..." 
                    value={this.state.dueDate} 
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />
                
            </form>
        )
    }
}

export default AddTodo
