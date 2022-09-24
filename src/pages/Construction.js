import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Construction = () => {

  return (
    <section className='section construction_section'>
      <Container>
        <Row>
            <Col><div className="construction"></div></Col>
            <Col><div className="info">Coming Soon...</div></Col>
        </Row>
      </Container>
    </section>
  )
}

export default Construction;