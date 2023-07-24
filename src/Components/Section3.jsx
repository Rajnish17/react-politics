import React from 'react'
import lalkila from "./images/lalkila.png"

const Section3 = () => {
  return (
    <>
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
         
          <h3 className="pt-2 mb-3">Voter Outreach and Engagement Solutions</h3>
          <p>
            Increase support for your campaign or organization with
            all-inclusive packages featuring 100% managed email, text messaging,
            digital ad and design services that help you reach voters.
          </p>
        </div>
        <div className="d-flex align-items-center">
          <a className="custom-btn btn" href="#section_5">
            View Solutions
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Section3