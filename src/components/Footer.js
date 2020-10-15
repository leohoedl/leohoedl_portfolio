import React from 'react';
import Containter from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

function Footer() {

    return (
        <footer className="mt-5">
                <Containter fluid="true">
                    <Row className="border-top justify-content-between p-3"> 
                        <Col className="p-2" md={3} small={12}>
                            Leo Hoedl © 2020
                        </Col>
                        <Col className="p-2 d-flex justify-content-end" md={3}>
                            This site was made by Leo Hoedl
                        </Col>
                    </Row>
                </Containter>
        </footer>
    );

}

export default Footer;