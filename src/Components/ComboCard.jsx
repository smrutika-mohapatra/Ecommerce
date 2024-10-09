import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import style from './comboCard.module.css'

const ComboSection = () => {
  return (
    <Container fluid className="p-5 bg-light rounded-4 shadow" id={style.container}>

      <Row id={style.ComboSection}>

        <Row className="mb-4 justify-content-center" id={style.comboCard}>
          <Col id={style.overplay}></Col>
          <Col id={style.base}>
            <img src="https://s3-alpha-sig.figma.com/img/875c/e845/c8c79822c31184aac3c27524a305576a?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tox-H~lFbpV~OD89l0cmwXEamZmLgaefcbKaWotJ0ojRmEvkYnEKCZRbLs0SQt-kh~cIYh0Gh0V0UEqFm2TDsbmxFWiBtLovvNSC1S4V3JqXGabqka4ki1mkXzSi5ke1gS4aNtzXmyxmaz~7jqwDpzBcKC-Ay9TQ7tdoil0ap2zft5tTtBJcJmORqg1itnmEF0vatML~rzlfQY86Cy1jJAnAyP5htU0ChzL63TvCSIlGAUlzLX~iBL~3v2wXdvXh4Jz9cefSF93jL9ocbw-pBT6FD8RiG4I~UyDeT1cgOxfKW3XzQmguLr~t0oU43j41B8uNFMCaSZrLwoTiDRGkvQ__" alt="" id={style.image} />
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

        <Row className="justify-content-center"id={style.imageSection}>
          {/* Image placeholders for product images */}
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
            <img id={style.images} src="https://s3-alpha-sig.figma.com/img/4b6a/955e/81e6cf288d6aeb42007ef1f85c970471?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QdrrfLKPzwM-eCl-p3iIsSTMfWeD1SMYHxL8COQOkg~NhsiKIMs0g~g-zcfXr7pmaaoMb45RA8iNVYCjXTcLLZbrrqQ~e0heuF2EeuH4TtkkMw2eJMnPx8Cr2yf914Qqv5Ua0f4jGMlKMLh-qAsNZtYNqWXYJLVLeXTlwG4jTZx7co1BOSsAmXhUTokljOWYh7bLRjqAOEqZVDuQOY784ZWsuYJxNcLHNqP9CJve5cNSQ3PsjstY3Lc~kWgkf-vNcplMUvXCTY4cFUomiGM9v8rb4E23grF0pddBJCkyb9WuzXJjHObEYf56M3F~Q3trK6gdKLOqmL1EtatZi2m-zQ__" className="img-fluid rounded" alt="Product 1" />
          </Col> <Col xs={12} sm={6} md={3} className="mb-4 text-center">
            <img id={style.images} src="https://s3-alpha-sig.figma.com/img/0b10/968d/3407836c47f514a4f4f13e06b76625a1?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pH-QhMblZUqHcmQ2h~iChhzwAavAicqJUKehYGqLiRQN4fl3pcM4TELgNWXW2OeuA48UmGd8TidFjWdbM-7aJw3l2dWBHIjxJAooSrXwrHQpfUN33BLhwHWqI~fM19rXP1QIXFee5mM83wj~eT8iP-po1y78HCOtzNkS6n7ctaIdVmrqoDOqL8xM~pJb87b7yb64ONlSDgGp52u9VOwxa~ike1fZK2IhGp54dWV0XJ5jYF5z~DcAbQ9awiG376CSkYcq6eNlhqpBNOXQq9fahKJ0eiuVX1swn3zBupbXvnXuMrtDF7eudB38KVd3fegD5JtA3eLdZOlvE0yPL83yGQ__" className="img-fluid rounded" alt="Product 2" />
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
            <img id={style.images} src="https://s3-alpha-sig.figma.com/img/2e3a/dffe/23964ea446ee6078143773aaaa9cb58e?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IbOaeCAJFLe8TCZx8d~UZ4nwfHfAp6GzUmsuuYV1Qo6QnNp076Lm5MvqsleAZSs0LFraIpvaL1Anavtisx0Fp7~o1MDv5~uEmYDdOrpAPo15HT1jMsIYzvavHeZ6pj-ux14oI2Xt4OidnRvzQEqLM6chlOCrKdao4mmTxEvZw3FIbNinn0oPfT~UqI9F3NhYsMF0jyzs6xnSw-WD~A1lZJxupuspMG-kUWj0K4bqDmxIdBEcyq92V3TlbXQBJBZTp0v0~zzNl5zOob5BYj12McyqY7wnyPq5a1zvFdRn6XXEKsh7fs4auw33jSSGR1ZGVfboJsYh9SWA2tYp7Q6TOA__" className="img-fluid rounded" alt="Product 3" />
          </Col>
          <Col xs={12} sm={6} md={3} className="mb-4 text-center">
            <img id={style.images} src="https://s3-alpha-sig.figma.com/img/0d47/4909/59b8e830c5a08ae4a95776746e4598f4?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mkBTzTiw9pg0cvITeOLzGqXjxtwvXv1qaY9RlOx1wJi6bd1l8XTZDyKyM70uHgwYBAR9KKJQ3gHpP5igj6iyPOsIBbyjyljGO~hkkYy4VXyqpB1v5C4zgj-OXPc0CMjoit82MMZJ~UDoY~B-Qe~djaLVQh3CznzUsqaaV7CLfCUVLFW1zLra2qNiU4xfevGtxYC3SaJ7qiYUNmi10G76DGyECeu7sAkqwHggFMIMC3ULQ-QYx7mKGXWCxCsVJo0nS9eB-Uo~CKa-jPELCMsb6delobzA7dkZBfHzE4CvJVJ3R0y3PIfwIg7JvnwnFdXNHmfemJ9pGa~SsRdz34q4Kg__" className="img-fluid rounded" alt="Product 4" />
          </Col>

        </Row>
      </Row>
    </Container>
  );
};

export default ComboSection;
