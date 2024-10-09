import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import style from './comboCard.module.css'
import comboimage1 from '../../../image/Combo-image-1.png';
import comboimage2 from '../../../image/Combo-image-2.png';
import comboimage3 from '../../../image/Combo-image-3.png';
import comboimage4 from '../../../image/Combo-image-4.png';

const ComboSection = () => {
  return (
    <Container fluid className="p-5 rounded-4" id={style.container}>

      <Row id={style.ComboSection}>

        <Row className="mb-4 justify-content-center" id={style.comboCard}>
          <Col id={style.overplay}></Col>
          <Col id={style.base}>
            <img src="https://s3-alpha-sig.figma.com/img/875c/e845/c8c79822c31184aac3c27524a305576a?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LYN0KVBQzYicnBaz~~QDgnKYWKX4KVQmQprB9R8OU~fxmgi1Q8VUDEH0zdo9Ggc4LP2qZiCT7t41fDnvhiy1~bc2le11PMLOc5GMSbfR1sAJ7h2HG4585dqN4Urs~VlHCt8chzzAKZeyJZKIbGOGr95DzPbOQSz6nANCVAhFywYo5NGg7VwaL9CLAOrUR5~0U0-y2bJSRrZ~p1z7lTIjovyqQai~gIYMAgLVdtMm5bJWdEb6w0gHMSiMJm5IMhcU9MLMS2yGnA0uHO0VvceZi6GI-MiKcQkYxGOq99qAdLxsZ9ApB2v~kCUqPcYau9hNfGUlFq6vQWkqPsYUpTS4VA__" alt="" id={style.image} />
            <Col className={style.basepage}></Col>
          </Col>
          <Col lg={8} className="text-center" id={style.content}>
            <h2>Combo 3: "Dynamic Duos"</h2>
            <p className="mt-3">
              Upgrade your style game with Combo 3. Choose any two products from our collection at an exclusive bundled price, creating dynamic duos that effortlessly elevate your wardrobe. Mix and match to curate your perfect ensemble!
            </p>
            <Button variant="dark" className="mt-3" id={style.button}>Click Here</Button>
          </Col>

        </Row>

        <Row className="justify-content-center" id={style.imageSection}>
          {/* Image placeholders for product images */}
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
          <img id={style.images} src={comboimage1} className="img-fluid rounded" alt="Product 1" />
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
          <img id={style.images} src={comboimage2} className="img-fluid rounded" alt="Product 2" />
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
          <img id={style.images} src={comboimage3} className="img-fluid rounded" alt="Product 3" />
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
          <img id={style.images} src={comboimage4} className="img-fluid rounded" alt="Product 4" />
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default ComboSection;
