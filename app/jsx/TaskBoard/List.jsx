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

  onTaskToggle(e) {
    this.props.onTaskToggle(e.target.getAttribute('data-id'));
  }


  render() {
    let tbody = null;
    if(this.props.tasks) {
      tbody = this.props.tasks.map(t => {
        
        return (
        <tr key={t._id}>
          <td>{t.desc}</td>
          <td>
            <input type="checkbox" 
              className="form-control"
              checked={t.done}
              onChange={this.onTaskToggle.bind(this)}
              data-id={t._id}
            />
          </td>

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
              <th>Done?</th>
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
