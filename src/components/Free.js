import React from "react";
import Card from "./Card";
import { Col, Row } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import legendary1 from "../assets/img/legendaries/1.png";
import legendary2 from "../assets/img/legendaries/2.png";
import legendary3 from "../assets/img/legendaries/3.png";
import legendary4 from "../assets/img/legendaries/4.png";
import legendary5 from "../assets/img/legendaries/5.png";
import legendary6 from "../assets/img/legendaries/6.png";
import legendary7 from "../assets/img/legendaries/7.png";
import legendary8 from "../assets/img/legendaries/8.png";
import legendary9 from "../assets/img/legendaries/9.png";
import legendary10 from "../assets/img/legendaries/10.png";
import legendary11 from "../assets/img/legendaries/11.png";
import legendary12 from "../assets/img/legendaries/12.png";
import legendary13 from "../assets/img/legendaries/13.png";
import legendary14 from "../assets/img/legendaries/14.png";
import legendary15 from "../assets/img/legendaries/15.png";
import legendary16 from "../assets/img/legendaries/16.png";
import legendary17 from "../assets/img/legendaries/17.png";
import partners1 from "../assets/img/partners/ebisus.png";
import partners2 from "../assets/img/partners/launchpad.svg";
export default function Free() {
  const options = {
    loop: true,
    margin: 10,
    item: 4,
    dots: false,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 2000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      768: {
        items: 2,
        nav: false
      },
      992: {
        items: 4,
        nav: false
      },
    },
  }
  return (
    <section className="section current-mint">
      <div className="free">
        <div className="container">
          <div className="background">
            <div className="ellipse pink"></div>
            <div className="ellipse blue"></div>
          </div>
          <Row>
            <div className="content">
              <h2 className="title">Main Hall NFT Minting is live on Launchpad!</h2>
              <a className="button" href="https://nftlaunch.me/collection/bingo" target="_blank">Mint Now</a>
            </div>
            <OwlCarousel className='owl-theme' {...options}>
              <div className='item'>
                <Card
                  image={legendary1}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary2}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary3}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary4}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary5}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary6}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary7}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary8}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary9}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary10}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary11}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary12}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary13}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary14}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary15}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary16}
                  series="Legendary Series"
                />
              </div>
              <div className='item'>
                <Card
                  image={legendary17}
                  series="Legendary Series"
                />
              </div>
            </OwlCarousel>
            <div className="content second">
              <h2 className="sub-title">Grab your ball!</h2>
              <div className="partners-container">
                  <a href="https://app.ebisusbay.com/collection/blockchain-bingo-balls-main-hall" target="_blank" className="partner">
                    <img src={partners1} alt="Ebisus" />
                  </a>
                  <a href="https://nftlaunch.me/collection/bingo" target="_blank" className="partner">
                    <img src={partners2} alt="Launchpad" />
                  </a>
              </div>
            </div>
          </Row>
        </div>
        {/* <div className="cards">
        <div className="card1">
          <Card
            image={legendary2}
            series="Legendary Series"
          />
        </div>
        <div className="card2">
          <Card
            image={legendary2}
            series="Legendary Series"
          />
        </div>
      </div> */}
      </div>
    </section>
  );
}