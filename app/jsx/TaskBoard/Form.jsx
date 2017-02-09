import React from 'react';
import {TextInput} from '../Utils/TextInput.jsx';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.task) {
      this.setState({task: {_id: props.task._id, desc: props.task.desc}});
    }

  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.task.desc){
      this.props.onFormSubmit(this.state.task);
    }
    this.setState({task : null});

  }

  handleTaskChange(event) {
    if (event.target.value) {
      this.setState({task: {desc: event.target.value, _id:this.state.task._id, valid: true}});
    }
    else {
      this.setState({valid: false});
    }

  }

  onCancel(e) {
    e.preventDefault();
    this.setState({task: null});
  }

  validateTask(task) {
    if (task)
      return true;
    else
      return false;
  }
  render() {
    if(this.state.task) {

      return (
        <div className="col-md-12 row" id="task-form">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="fieldset">
              <TextInput 
                validate={this.validateTask} 
                label="Task" 
                placeholder="new task" 
                value={this.state.task.desc} onChange={this.handleTaskChange}/>
            </div>
            <div className="fieldset" id="task-form-controls">
              <input className="btn btn-primary" id="task-form-submit" type="submit" value="Save"/>
              <button className="btn btn-default" onClick={this.onCancel.bind(this)}>Cancel</button>
            </div>
          </form>
        </div>
      )
    } else {  return null }
  }
}
