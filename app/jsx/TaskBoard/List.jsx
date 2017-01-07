import React from 'react';
import ReactDOM from 'react-dom'
import BootstrapDialog from 'bootstrap3-dialog';


export class List extends React.Component {
  sayHello(task) {
    alert("Hello " + task);
  }

  onDeleteClick(t) {
    BootstrapDialog.confirm('Delete task?', (conf) => {
      if(conf) 
        this.props.onDeleteClick(t);
    });
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

            <a data-toggle="modal" href="#task-delete-confirm">
              <button className="btn btn-danger form-control" onClick={()=> this.onDeleteClick(t)}>X</button>
            </a>
          </td>

        </tr>
      )});
    }
    return (
      <div>
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
      </div>
      );

  }
}
