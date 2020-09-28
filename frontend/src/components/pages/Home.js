import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import { Container, Button, Row, Col } from 'react-bootstrap';



export default function Home() {
    const { userData } = useContext(UserContext)
    const history = useHistory()

    // logged in home screen
    if (userData.user) {
        return (
            <Container style={{ height: '300px', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <h2>Welcome {userData.user.displayName}, you are logged in!</h2>
                </div>
            </Container>
        )
    }

    // logged out home page
    return (
        <Container style={{ height: '500px', alignItems: 'center', justifyContent: 'center', paddingTop: '100px' }}>
            <Row>
                <Col>
                    <br />
                    <div style={{ textAlign: 'center' }}>
                        <h2 >Welcome to Charlie's User Authentication Practice</h2>
                        <br />
                        <h3>Please Register or Log in</h3>
                        <br />
                    </div>
                </Col>
            </Row>
            <Row className='d-flex justify-content-center' style={{ paddingTop: '80px' }}>
                
                <Col sm={3} className='d-flex justify-content-center'>
                    <Button style={{ width: '80%', height: '50px' }} onClick={() => history.push('/login')}>Login</Button>
                </Col>

                <Col sm={3} className='d-flex justify-content-center'>
                    <Button style={{ width: '80%', height: '50px' }} onClick={() => history.push('/register')} >Register</Button>
                </Col>

            </Row>
        </Container>
    )
}