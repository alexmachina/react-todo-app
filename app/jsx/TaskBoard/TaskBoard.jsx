import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import {Form} from './Form.jsx';
import {List} from './List.jsx';

import {TaskRepository} from './Repository.js';


export class TaskBoard extends React.Component{
  constructor(props) {
    super(props);
    this.state = { };
  }
  refreshTasks() {
    let req = $.get({
      url: 'http://localhost:3000/tasks',
      method: 'GET',
    });

    req.done((tasks) => {
      this.setState({
        tasks: tasks,
        selectedTask: null
      });
    });


  }
  componentWillMount() {
    this.refreshTasks();
  }

  onDeleteClick(task) {
    let req = $.ajax({
      url:`http://localhost:3000/task/${task._id}`,
      method:'DELETE'
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(xhr => alert(xhr.responseText));
  }

  onEditClick(task) {
    this.setState({selectedTask: task});
    console.log(task);
  }

  saveTask(task) {
    delete task._id;
    let req = $.post({
      url:'http://localhost:3000/task',
      data: task
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(jqXHR => alert(jqXHR.responseText));

  }

  updateTask(task) {
    let url = `http://localhost:3000/task/${task._id}`;
    let req = $.ajax({
      method:'PUT',
      url: url,
      data: task
    });

    req.done(() => {
      this.refreshTasks();
    });

    req.fail(xhr => alert(xhr.responseText));


  }
  onFormSubmit(task) {
    if (!task._id) 
      this.saveTask(task);
    else
      this.updateTask(task);

    this.setState({message: "Task Saved.", selectedTask:null});
    

  }

  onNewClick() {
    this.setState({selectedTask: {'_id':null, desc:''}});
  }

  render () {
    let message = this.state.message;
    return(
      <div>
        <h1>Taskboard</h1>
        <List tasks={this.state.tasks} onEditClick={this.onEditClick.bind(this)} onDeleteClick={this.onDeleteClick.bind(this)}/>
        <div className="col-xs-12">

          <div className="col-xs-6">
            <button className="btn btn-primary row" onClick={this.onNewClick.bind(this)}>New Task</button>        
          </div>

          <div className="col-xs-6 text-right">
            <span className="">{message}</span>
          </div>

        </div>
        <Form task={this.state.selectedTask} onFormSubmit={this.onFormSubmit.bind(this)}/>
      </div>

    );
  }
}

