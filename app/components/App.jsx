import React from 'react';
import Clock from './Clock';
import Toggle from './Toggle';
import List from './List';
import NameForm from './Form';


require('./App.css');

export default class App extends React.Component {
 constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Clock />
        <Toggle />
        <List />
        <NameForm />
      </div>
    );
  }
}

