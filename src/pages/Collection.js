import React from 'react';
import Banner from '../components/Banner';
import SingleCollection from '../components/SingleCollection';
import banner_image from "../assets/img/header/redcarpet.png";
import { Container, Row, Col } from 'react-bootstrap';
import mainhall from '../assets/img/collections/mainhall.gif';
const Collection = () => {
    return (
        <section className='collection'>
            <Banner banner={banner_image} addclass="game-banner" />
            <Container>
                <div className="main-title">Current Collections</div>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <SingleCollection image={mainhall}/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Collection;
