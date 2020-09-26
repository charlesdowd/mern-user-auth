import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function HomeNav() {
    console.log('Hey now Nav bar')
    return (
        <Container>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand className='pl-3' href="/">Test User Authentication</Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "75%" }}>
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar></Container>

    )
}