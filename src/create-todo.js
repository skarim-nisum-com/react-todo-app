import React, { Component } from 'react';

class CreateTodo extends Component {

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="task" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault();
        //console.log(this.refs.createInput.value);
        //console.log(this.props.createTask);
        this.props.createTask(this.refs.createInput.value);
        this.refs.createInput.value = '';
    }
}

export default CreateTodo;