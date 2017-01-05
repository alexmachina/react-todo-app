import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  this.handleActivityChange = this.handleActivityChange.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState({_id: props.task._id, desc: props.task.desc});
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state);
  }

  handleActivityChange(event) {
    this.setState({desc: event.target.value});
  }
  render() {
    if(this.props.task) {


      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>Activity </label>
          <input type="text" onChange={this.handleActivityChange} placeholder="Activity" value={this.state.desc}></input>
          <input type="submit" value="Salvar"/>
          
        </form>
      )
    } else {  return null }
  }
}
