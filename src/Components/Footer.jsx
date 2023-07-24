import React from 'react'
import logo from "./images/logo.png"

const Footer = () => {
  return (
  <>
  {/* fooetr section */}

  <footer className="footer-section">
  <div className="container">
    <div className="footer-content pt-5 pb-1">
      <div className="row">
        <div className="col-xl-4 col-lg-4 mb-50">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index.html">
                <img src={logo}  style={{ height: 40, width: 140 }} className="img-fluid" alt="logo" />
              </a>
            </div>
            <div className="footer-text">
              <p className="text-white">
                Learn more about EnSpot Marketing's full-service political
                website packages and marketing services for your campaign.{" "}
              </p>
            </div>
            <div className="footer-social-icon">
              <span>Follow us</span>
              <ul className="social_icon">
                <li>
                  <a href="#">
                    <i className="bi bi-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-youtube" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 mb-30">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Contact Us</h3>
            </div>
            <div className="single-cta">
              <div className="cta-text">
                <i className="bi bi-geo-fill" />
                <span className="text-white">Patna Bihar India</span>
              </div>
            </div>
            <div className="single-cta">
              <div className="cta-text">
                <i className="bi bi-telephone" />
                <span className="text-white">+91-1234567890</span>
              </div>
            </div>
            <div className="single-cta">
              <div className="cta-text">
                <i className="bi bi-envelope" />
                <span className="text-white">contact@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 mb-50">
          <div className="footer-widget">
            <div className="footer-widget-heading">
              <h3>Subscribe</h3>
            </div>
            <div className="footer-text mb-25">
              <p className="text-white">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
            </div>
            <div className="subscribe-form">
              <form action="#">
                <input type="text" placeholder="Email Address" />
                <button>
                  <i className="bi bi-telegram" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>



  {/* //copy right section */}
  <footer className="site-footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-12">
        <div className="copyright-text-wrap">
          <p className="mb-0">
            <span className="copyright-text">
              Copyright © 2023 <a href="#">Politicks Now</a> Company. All rights
              reserved.
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  
  
  </>
  )
}

export default Footer