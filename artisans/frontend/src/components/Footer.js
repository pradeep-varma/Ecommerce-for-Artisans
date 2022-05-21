import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
const current_date=new Date();
const current_year=current_date.getFullYear();
const Footer = () => {
    return (
        <footer>
        <Container>
            <Row>
                <Col className="text-center py-3"> Copyright &copy; Artisans {current_year}</Col>
            </Row>
        </Container>
           
        </footer>
    )
}

export default Footer
