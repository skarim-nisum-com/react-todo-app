import React, { Component } from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

class TodosList extends Component {
    renderItems() {
        
    }
    render() {
        return (
            <table>
                <TodosListHeader />
                <tbody>
                    <TodosListItem todos={this.props.todos} />
                </tbody>
            </table>
        );
    }
}

export default TodosList;