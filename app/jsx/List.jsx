import React from 'react';
import ReactDOM from 'react-dom'

export class List extends React.Component {
  sayHello(task) {
    alert("Hello " + task);
  }


  render() {
    let tbody = null;
    if(this.props.tasks) {
      tbody = this.props.tasks.map(t => {return (
        <tr key={t._id}>
          <td>{t.desc}</td>

          <td>
            <button className="btn btn-default form-control" onClick={()=> this.props.onEditClick(t)}>Edit</button>
          </td>

          <td>
            <button className="btn btn-danger form-control" onClick={()=> this.props.onDeleteClick(t)}>X</button>
          </td>

        </tr>
      )});
    }
    return (
        <table className="text-left table table-stripped">
          <thead>
            <tr>
              <th>Task</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
    );

  }
}
