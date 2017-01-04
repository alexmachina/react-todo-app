import React from 'react';
import ReactDOM from 'react-dom';

import {Form} from './Form.jsx';
import {List} from './List.jsx';


class App extends React.Component{
  render () {
    return(
    <div>
      <h1>Todo App</h1>
      <List />
      <Form />
    </div>
  );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
