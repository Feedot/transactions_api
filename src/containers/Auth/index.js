import React, { Component } from 'react';
import {Input, Button} from 'semantic-ui-react'
import {fetching} from '../../api/index'
import {Link} from 'react-router-dom'

import styles from './styles.css'

class Auth extends Component {
    logIn = () => {
        const data = {
            'email': "P1234@ukr.net",
            'password': "Secret"
        }
        fetching.post('/user/login', data)
            .then(res => res)
            .catch(res => res)

    }
    render() {
        return (
            <div className={styles.Auth}>
                <Input
                    placeholder='Email...'
                    ref={inp1 => (this.inp1 = inp1)}
                />
                <Input
                    placeholder='Password...'
                    ref={inp2 => this.inp2 = inp2}
                />
                <Button onClick={this.logIn}>Log In</Button>
            </div>
        );
    }
}

export default Auth;
