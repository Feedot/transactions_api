import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'


import Auth from '../Auth/index'
import './index.css';




class App extends Component {
  render() {
    return (
            <div>
                <Switch>
                    <Route path={'/'} component={Auth}/>
                </Switch>
            </div>
    );
  }
}

export default App;
