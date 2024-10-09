import React from 'react'
import './Hero.css';
import instaimg from '../../../image/instagram.png'
import gmail from '../../../image/gmail.png'

const Banner = () => {
  return (
    <div id='productCategory'>
      <div>
        <div className='heroSocialcontent container py-2 text-end'>
          <img src={gmail} alt='' width='30' />
          <img className='ms-lg-3' src={instaimg} alt='' width='30' />
        </div>
        <div className='heroBackground py-5'>
          <div className='container text-center p-lg-5 heroContent'>
            <h2 className='my-3'>Fabulous Blue and Grey Silk Fabric <br/> Embroidered Lehenga Choli</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
