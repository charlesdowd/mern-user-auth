import React, { useContext } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import UserContext from '../context/UserContext'



export default function HomeNav() {
    const { userData, setUserData } = useContext(UserContext)

    const logoutUser = () => {
        // reset context when user logs out
        setUserData({
            token: undefined,
            user: undefined
        })

        localStorage.setItem('auth-token', '')
    }

    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className='pl-3' href="/">Test User Authentication</Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "75%" }}>

                    {userData.data ?
                        <Nav.Link onClick={logoutUser}>Logout</Nav.Link>
                        :
                        <>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/register">Register</Nav.Link>
                        </>
                    }

                </Nav>
            </Navbar></Container>

    )
}