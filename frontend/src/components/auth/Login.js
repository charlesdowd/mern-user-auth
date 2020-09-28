import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { userData, setUserData } = useContext(UserContext)
    const history = useHistory()

    if (userData.user) history.push('/')

    const submitLogin = async (e) => {
        e.preventDefault()

        try {
            const loginRes = await axios.post('http://localhost:5000/users/login', {
                email,
                password
            })
        
            // user log in success: set local storage and userContext + toast success
            if (loginRes.status === 200) {
                localStorage.setItem('auth-token', loginRes.data.token)
                
                setUserData({
                    token: loginRes.data.token,
                    user: {
                        id: loginRes.data.user.id,
                        displayName: loginRes.data.user.displayName
                    }
                })
                
                toast.success('Login successful')
                history.push('/')
            }

        }
        catch (error) {
            console.log(error.response)
            const errorMsg = error.response.data.msg
            toast.error('Error Logging in: ' + errorMsg)
            setEmail('')
            setPassword('')
        }
    }


    const onEmailChange = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }
    const onPasswordChange = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
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

                <Button variant="primary" type="submit" onClick={submitLogin}>
                    Log In
            </Button>
            </Form>
        </Container>

    )
}