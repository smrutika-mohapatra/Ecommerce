import React from 'react'
import './Hero.css';
import instaimg from '../../../image/instagram.png'
import gmail from '../../../image/gmail.png'
import homesectionimage1 from '../../../image/home_section_slider-1.png'
import homesectionimage2 from '../../../image/home_section_slider-2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Hero = () => {
  return (
    <div id='home'>
      <div className='heroBackground py-5'>
        <div className='container text-center p-lg-5'>
          <h1>Experience fashion like never before</h1>
          <h2 className='my-3'>India's first clothing website that offers you fashion accessories combos and gifts along with it.</h2>
          <p>Discover a world of fashion-forward trends, curated collections, and timeless pieces that inspire. Unleash your inner fashionista and embark on a journey of confidence, elegance and impeccable style.</p>
          <div className='heroSocialcontent'>
            <img src={gmail} alt='' width='30' />
            <img className='ms-lg-3' src={instaimg} alt='' width='30' />
          </div>
        </div>

        <div className='container homeSectionslider'>
          <OwlCarousel className='owl-theme' dots={false} items={2} autoplay={true}>
            <div className='item d-flex align-items-center justify-content-center bg-white homeSectionslidercard'>
                <p>Every purchase comes with a special gift – our way of saying thank you for choosing Lokalitha Fashions</p>
                <img src={homesectionimage1} alt=''/>
            </div>
            <div className='item d-flex align-items-center justify-content-center bg-white homeSectionslidercard'>
                <p>Every purchase comes with a special gift – our way of saying thank you for choosing Lokalitha Fashions</p>
                <img src={homesectionimage2} alt=''/>
            </div>
            <div className='item d-flex align-items-center justify-content-center bg-white homeSectionslidercard'>
                <p>Every purchase comes with a special gift – our way of saying thank you for choosing Lokalitha Fashions</p>
                <img src={homesectionimage1} alt=''/>
            </div>
            <div className='item d-flex align-items-center justify-content-center bg-white homeSectionslidercard'>
                <p>Every purchase comes with a special gift – our way of saying thank you for choosing Lokalitha Fashions</p>
                <img src={homesectionimage2} alt=''/>
            </div>
            <div className='item d-flex align-items-center justify-content-center bg-white homeSectionslidercard'>
                <p>Every purchase comes with a special gift – our way of saying thank you for choosing Lokalitha Fashions</p>
                <img src={homesectionimage1} alt=''/>
            </div>
          </OwlCarousel>
         
        </div>
      </div>
    </div>
  )
}

export default Hero
