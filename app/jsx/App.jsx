import React from 'react';
import ReactDOM from 'react-dom';
import {TaskBoard} from './TaskBoard/TaskBoard.jsx';


class App extends React.Component{
  render() {
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <TaskBoard />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
