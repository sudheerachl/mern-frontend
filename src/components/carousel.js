import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import img1 from '../images/b1.jpg';
import img2 from '../images/b3.jpg';
import img3 from '../images/b2.jpg';
import img4 from '../images/logo.png';

export function Tor() {
  return (
    <Carousel fade={true} interval={7000}>
      <Carousel.Item>
        <img src={img1} alt="img1" width="100%" height="55%" />
        <Carousel.Caption>
          <Link to="/healthbot">
            <Button variant="primary">Chat with HealthBot</Button>
          </Link>
          <img src={img4} alt="" width="100vw" height="100vw" />
          <h3>MIND HEAVEN</h3>
          <p>I AM YOUR FRIEND WHO WILL HELP YOU</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img2} alt="img2" width="100%" height="100%" />
        <Carousel.Caption>
          <Link to="/healthbot">
            <Button variant="primary">Chat with HealthBot</Button>
          </Link>
          <img src={img4} alt="" width="100vw" height="100vw" />
          <h3>MIND HEAVEN</h3>
          <p>I AM YOUR FRIEND WHO WILL HELP YOU</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={img3} alt="img3" width="100%" height="70%" />
        <Carousel.Caption>
          <Link to="/healthbot">
            <Button variant="primary">Chat with HealthBot</Button>
          </Link>
          <img src={img4} alt="" width="100vw" height="100vw" />
          <h3>MIND HEAVEN</h3>
          <p>I AM YOUR FRIEND WHO WILL HELP YOU</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
