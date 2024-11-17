import { Component, Row, Col, Container } from 'react-bootstrap'

import React from 'react'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>EMarketPlace &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer