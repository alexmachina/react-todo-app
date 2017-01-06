import React from 'react';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  this.handleActivityChange = this.handleActivityChange.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.task) {
      this.setState({_id: props.task._id, desc: props.task.desc});
    }
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
        <div className="col-md-12 row">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="fieldset">
              <label>Activity </label>
              <input className="form-control" type="text" onChange={this.handleActivityChange} placeholder="Activity" value={this.state.desc}></input>
            </div>

            <div className="fieldset">
              <input className="btn btn-primary" type="submit" value="Save"/>
            </div>

          </form>
        </div>
      )
    } else {  return null }
  }
}
