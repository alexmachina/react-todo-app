import React from 'react';
import ReactDOM from 'react-dom';

import {Form} from './Form.jsx';
import {List} from './List.jsx';


class App extends React.Component{
  componentWillMount() {
    this.setState({
      tasks : [
        {_id: '12345',
          desc: 'Act 1'},
          {_id: '2444',
            desc: 'Act 2'}
          ],
      selectedTask: null
        }
      )
    }

  onEditClick(task) {
    this.setState({selectedTask: task});

  }
  onEditClick(task) {
    this.setState({
      
    });
  }


    render () {
      return(
        <div>
          <h1>Todo App</h1>
          <List tasks={this.state.tasks} onEditClick={this.onEditClick.bind(this)}/>
          <Form task={this.state.selectedTask} onSaveClick={this.onSaveClick.bind(this)}/>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));
