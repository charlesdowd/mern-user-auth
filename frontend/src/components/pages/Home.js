import React, { useContext } from 'react';
import UserContext from '../../context/UserContext';
import { Container } from 'react-bootstrap'


export default function Home() {
    const { userData } = useContext(UserContext)
    
    // logged in home screen
    if (userData.data) {
        return (
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <br />
                    <h2>Welcome {userData.data.displayName}, you are logged in!</h2>
                </div>
            </Container>
        )
    }

    // logged out home page
    return (
        <Container> 
            <br />
            <div style={{ textAlign: 'center' }}>
                <h2 >Welcome to Charlie's User Authentication Practice</h2>
                <br />
                <p>Please Register or Log in to be authenticated!</p>
            </div>
        </Container>
    )
}