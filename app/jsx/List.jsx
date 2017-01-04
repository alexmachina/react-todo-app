import React from 'react';
import ReactDOM from 'react-dom'

export class List extends React.Component {
  sayHello(task) {
    alert("Hello " + task);
  }


  render() {

    let tbody = this.props.tasks.map(t => {return (
      <tr key={t._id}>
        <td>{t.desc}</td>

          <td>
            <button onClick={()=> this.props.onEditClick(t)}>E</button>
          </td>

        <td>
          <button onClick={()=> this.delete(t)}>X</button>
        </td>


      </tr>
    )});

    return (
      <table>
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
