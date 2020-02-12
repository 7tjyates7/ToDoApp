import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: '',
        dueDate: '',
    }
    todaysDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy; 
        return today
    }
    tomorrowsDate = () => {
        var today = new Date();
        var dd = String(today.getDate()+1).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy; 
        return today
    }

    onSubmit = (e) => {
        e.preventDefault();
        const regex = /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/g;
        if (this.state.dueDate.match(regex)=== null){
            alert('Please Input a Valid Due Date: mm/dd/yyyy')
            this.setState({dueDate: ''})
        } else {
            this.props.addTodo(this.state.title, this.state.dueDate);
            this.setState({title: '', dueDate: ''})
        }
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
