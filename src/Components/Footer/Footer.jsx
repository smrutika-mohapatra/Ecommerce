import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <footer className='py-5 my-3'>
      <div className='container footer-background'>
        <div className='d-flex align-items-center justify-content-around'>
          <div>
            <h1>Lokalitha Fashions</h1>
          </div>
          <div>
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">Payment Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Privacy Policy</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href='#'>Cookies Policy</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Shipping Details</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Terms & Conditions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Refund, Return & Cancellation Policy</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href='#'>FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='#'>Order Status / Track Your Order</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
