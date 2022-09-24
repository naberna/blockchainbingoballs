import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {

  return (
    <section className='section blog'>
      <div className="main-title">Blog</div>
      <Container id="medium">
        <Row id="jsonContent"></Row>
        <div className="blog-button">
          <a href="https://medium.com/@BlockchainBingoBalls" target="_blank" role="button">View all posts</a>
        </div>
      </Container>
    </section>
  )
}

export default Blog