import React from 'react';
import {Table} from './Table.jsx';
import {Form} from './Form.jsx';

export class UserBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: null,
      users: []
    }
  }

  refreshUsers() {}

  onEditClick(user) {
    this.setState({selectedUser: user});
  
  }

  onSaveClick(user) {

  }

  onNewClick() {}

  render() {
    return (
      <div>
        <h1>UserBoard</h1>
        <Table />
        <Form />
      </div>
    )
  }
}
