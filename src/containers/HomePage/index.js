import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

import styles from './styles.css'

class HomePage extends Component {
    state = {userInfo: {}}
    componentWillMount() {
        // fetch info
        const userInfo = {
                "_id": "5b5634883c57f00bdc2c7d24",
                "email": "Pasha34@ukr.net",
                "account": {
                    "_id": "5b5634883c57f00bdc2c7d23",
                    "account_ammount": 1000
            }
        }
        this.setState({userInfo})
    }
    render() {
        const { email, account }  = this.state.userInfo
        return (
            <div className={styles.HomePage}>

                <div>
                    <Card>
                        <Card.Content>
                            <Card.Meta>
                                <span className='date'>Email:</span>
                            </Card.Meta>
                            <Card.Header>{email}</Card.Header>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Card.Content>
                            <Card.Meta>
                                <span className='date'>Your wallet:</span>
                            </Card.Meta>
                            <Card.Header>{account['_id']}</Card.Header>
                        </Card.Content>
                        <Card.Content>
                            <Card.Meta>
                                <span className='date'>Your ammount:</span>
                            </Card.Meta>
                            <Card.Header>{account['account_ammount']}</Card.Header>
                        </Card.Content>
                    </Card>
                </div>
            </div>
        );
    }
}

export default HomePage;
