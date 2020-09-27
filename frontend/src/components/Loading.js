import React from 'react'
import { Spinner, Container, Row } from 'react-bootstrap'

export default function Loading() {

    return (
        <Container>
            <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px'}}>
                <Spinner animation='border' />
            </Row>
        </Container >
    )
}