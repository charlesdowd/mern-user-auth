import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import UserContext from '../../context/UserContext';
import axios from 'axios';

export default function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [displayName, setDisplayName] = useState('')
    const { userData } = useContext(UserContext)
    const history = useHistory()

    if (userData.user) history.push('/')

    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    const onPasswordCheckChange = (e) => {
        e.preventDefault()
        setPasswordCheck(e.target.value)
    }
    const onDisplayNameChange = (e) => {
        e.preventDefault()
        setDisplayName(e.target.value)
    }

    const submitLogin = async (e) => {
        e.preventDefault()

        try {

            const registerRes = await axios.post('http://localhost:5000/users/register', {
                email,
                password,
                passwordCheck,
                displayName
            })

            // register success, toast + send them to home page
            if (registerRes.status === 200) {
                toast.success('Registered Successfully')
                history.push('/')
            }

        }
        catch (error) {
            toast.error('Registration Failed: ' + error.response.data)
            console.log(error.response)
        }
    }

    return (
        <Container>
            <br />
            <Form style={{ width: '60%', margin: '0 auto' }}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="Enter email" onChange={onEmailChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} placeholder="Password" onChange={onPasswordChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPasswordCheck">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" value={passwordCheck} placeholder="Re-enter Password" onChange={onPasswordCheckChange} />
                </Form.Group>

                <Form.Group controlId="formBasicDisplayName">
                    <Form.Label>Display Name (optional)</Form.Label>
                    <Form.Control type="name" value={displayName} placeholder="Display Name" onChange={onDisplayNameChange} />
                </Form.Group>

                <Button variant="primary" type="submit" onClick={submitLogin}>
                    Register
            </Button>
            </Form>
        </Container>

    )
}