import React from 'react'
import lalkila from "./images/lalkila.png"
const Section4 = () => {
  return (
    <>
    <>
  <section className="about section-padding" id="section_2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
          <div className="about-thumb">
            <h3 className="pt-2 mb-3">
              Political Advertising Services for Winning Campaigns
            </h3>
            <p>
              Quickly increase your visibility with targeted marketing services
              to help your political campaign succeed. EnSpot Political offers
              scalable services from design to digital ads managed on behalf so
              that you can focus on winning your campaign.
            </p>
            <p />
          </div>
          <div className="d-flex align-items-center">
            <a className="custom-btn btn" href="#section_5">
              View Services
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-12">
          <img
            src={lalkila}
            className="about-image img-fluid"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section className="about section-padding" id="section_2">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-12">
          <img
            src={lalkila}
            className="about-image img-fluid"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12 mt-5 mt-lg-0">
          <div className="about-thumb">
            <h3 className="pt-2 mb-3">
              Establish your political presence with your own website
            </h3>
            <p>
              We create high-visibility campaign websites that set you apart
              from other candidates and beautifully displays your campaign
              message online. No need to spend hours with do-it-yourself website
              builders.
            </p>
          </div>
          <div className="d-flex align-items-center">
            <a className="custom-btn btn" href="#section_5">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    
    </>
  )
}

export default Section4