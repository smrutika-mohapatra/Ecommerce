import React from 'react'
import './Productcard.css';
import data from './productdata.js'


const Productcard = () => {
  return (
    data.map((product) => {
      return (
        <div id='productCard' className="card" style={{ width: "16rem" }}>
          <img className="card-img-top" src={product.image} height='200px' style={{objectFit:'cover'}} alt="Card image cap" />
          <div className="card-body">
            <h2>{product.name}</h2>
            <div className='d-flex align-items-center'>
              <h5 className='brandName'>{product.brandName}</h5>
              <h6 className='ms-2 rating'>{product.rating}
                <i className="ms-1 fa-solid fa-star"></i>
              </h6>
            </div>
            <div className='d-flex align-items-center'>
              <h4 className='discountedPrice'>Rs.{product.discountedPrice}</h4>
              <h5 className='originalPrice mx-2'>Rs.{product.originalPrice}</h5>
              <h6 className='discount'>({product.discount}% off)</h6>
            </div>
          </div>
        </div>
      )

    })

  )
}

export default Productcard
