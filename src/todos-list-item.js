import React, { Component } from 'react';

class TodosListItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
        task: 'test',
        isEditing: false
    }
  }

  renderActionsSection(){
      if(this.state.isEditing) {
          return (
            <td>
              <button>Save</button>
              <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
            </td>
          );
      }
      return (
          <td>
              <button onClick={this.onEditClick.bind(this)}>Edit</button>
              <button>Delete</button>
          </td>
      );
  }

  renderTaskSection() {
    const { task, isCompleted} = this.props;
    return (
        <tr>
            <td>{task}</td>
        </tr>
    );
  }

  render() {
    return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
    );
  }

  onEditClick() {
      this.setState({ isEditing: true });
  }
  onCancelClick(){
      this.setState({ isEditing: true });
  }
}

export default TodosListItem;