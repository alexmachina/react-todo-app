import React from 'react';
import ReactDOM from 'react-dom';

import {Form} from './Form.jsx';
import {List} from './List.jsx';


class App extends React.Component{

  componentWillMount() {
    this.setState({
        selectedTask: null
    }
    )
  }

  onDeleteClick(task) {
    let tasks = this.state.tasks;

    for(let i = 0; i < tasks.length; i++) {
      if (task._id == tasks[i]._id) {
        tasks.splice(i, 1);
      }
    }

    this.setState({tasks: tasks})

  }

  onEditClick(task) {
    this.setState({selectedTask: task});

  }
  onFormSubmit(task) {
    let tasks  = this.state.tasks ? this.state.tasks : [];
    //Search the array and replace the element.
    //Or push a new element.
    if(task && task._id) {
      for(let i = 0; i < tasks.length; i++) {
        if (task._id == tasks[i]._id) {
          tasks[i] = task;
        }
      }
    } else {
      task._id = Math.random();
      tasks.push(task);
    }
    console.log(tasks);

    //Update the state
    this.setState({
      tasks: tasks
    });
  }

  onNewClick() {
    this.setState({selectedTask: {'_id':null, desc:''}});
  }

  render () {
    return(
      <div>
        <h1>Todo App</h1>
        <List tasks={this.state.tasks} onEditClick={this.onEditClick.bind(this)} onDeleteClick={this.onDeleteClick.bind(this)}/>
        <Form task={this.state.selectedTask} onFormSubmit={this.onFormSubmit.bind(this)}/>
        <button onClick={this.onNewClick.bind(this)}>Novo</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
