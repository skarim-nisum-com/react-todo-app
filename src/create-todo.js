import React, { Component } from 'react';

class CreateTodo extends Component {

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What you want to do?" ref="createInput" />
                <button>Create</button>
            </form>
        );
    }

    handleCreate(event){
        event.preventDefault();
        console.log(this.refs.createInput.value);
    }
}

export default CreateTodo;