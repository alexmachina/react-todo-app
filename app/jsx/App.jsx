import React from 'react';
import ReactDOM from 'react-dom';
import {TaskBoard} from './TaskBoard/TaskBoard.jsx';
import {UserBoard} from './UserBoard/UserBoard.jsx';
import {Router, Route, hashHistory, Link} from 'react-router';


class App extends React.Component{
  render() {
    return(
      <div className="container-fluid">
        <div className="navbar navbar-default">
          <ul className="nav navbar-nav">
            <li><Link to="/taskboard">Taskboard</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </div>
        <div className="col-xs-12 col-md-12">
          {this.props.children}

        </div>
      </div>
    );
  }
}

const router =(
  <Router history={hashHistory} >
    <Route path="/" component={App}>
      <Route path="/taskboard" component={TaskBoard} />
      <Route path="/users" component={UserBoard}/>
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
