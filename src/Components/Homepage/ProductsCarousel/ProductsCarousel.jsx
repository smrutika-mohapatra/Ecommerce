import React from 'react'
import './ProductsCarousel.css'
import slider1 from '../../../image/slider-1.png';
import Ellipse1 from '../../../image/Ellipse 12.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductsCarousel = () => {


  return (
    <div style={{ position: 'relative' }}>
      <div>
        <img style={{ position: 'absolute', left: '0', bottom: '300px' }} src={Ellipse1} alt='' />
      </div>
      <div className='container productsCarousel py-4' >
        <div className='ps-3 '>
          <h2>Our Products</h2>
          <p>Elevate your style with Lokalitha Fashion – where fashion meets quality and every piece tells a unique story.</p>
          <div className='py-3'>
            <OwlCarousel className='owl-theme' loop items={1} autoplay={true} margin={10}>
              <div className='item'>
                <img src={slider1} alt='' />
              </div>
              <div className='item'>
                <img src={slider1} alt='' />
              </div>
              <div className='item'>
                <img src={slider1} alt='' />
              </div>
              <div className='item'>
                <img src={slider1} alt='' />
              </div>
              <div className='item'>
                <img src={slider1} alt='' />
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCarousel
