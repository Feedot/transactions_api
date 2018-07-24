import React, {Component}  from 'react';
import {Route, Switch, Router} from 'react-router-dom'
import createHistory from "history/createBrowserHistory";

import Auth from '../Auth/index'
import HomePage from '../HomePage/index'

import styles from './index.css';

const history = createHistory()

class App extends Component {
    state = {auth: false}
    componentDidMount(){
        this.setState({auth: localStorage.getItem('JWT_TOKEN_TEST')})
    }
    render () {
        const {auth} = this.state

        return (
            <Router history={history}>
                <div className={styles.app}>
                    <Switch>
                        <Route path='/' component={auth ? HomePage : Auth} exact={true}/>
                        <Route path='/auth' component={auth ? HomePage: Auth}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
