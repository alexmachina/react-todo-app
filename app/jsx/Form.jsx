import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
  render() {
    if(this.props.task) {
      return (
        <form>
          <label>Activity </label>
          <input type="text" placeholder="Activity" value={this.props.task.desc}></input>
          <button>Save</button>
        </form>
      )
    } else {  return null }
  }
}
