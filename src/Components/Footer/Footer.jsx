import React from 'react'
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoe</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to Shoppers Island—your ultimate 
          destination for an extraordinary online
          shopping experience! Discover trendy
          fashion, electronics, home essentials,
          and more at unbeatable prices.
          With secure payments, fast shipping,
          and excellent service, we make shopping seamless.
          Join us now and explore a world of endless possibilities.
          Happy shopping!
          </span>
        </div>
        <div className="item">
        <h1>Contact Us:</h1>
          <span>
          Have questions or need assistance? Reach out to our friendly customer support team:
          <br/>
          <br/>
          Phone: 916-391-5524
          <br/>
          Email: shop@gmail.com
          <br/>
          Connect with us on LinkedIn for updates, promotions, and more: <a href='https://www.linkedin.com/in/sriman-chaudhuri-6b5012207/'>https://www.linkedin.com/in/sriman-chaudhuri-6b5012207/</a>
          <br/>
          <br/>
          We value your feedback and are committed to providing the best shopping experience. 
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Shopper's Island</span>
          <span className="copyright">© Copyright 2023. All Rights Preserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer
