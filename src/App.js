import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import StreamPage from "./components/StreamPage";

class App extends Component {

  render() {

    return (
      <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/:number' component={StreamPage}/>
      </Switch>
    );
  }
}

export default App;
