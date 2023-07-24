import React from 'react'
import lalkila from "./images/lalkila.png"
import three from "./images/three.png"

const Section2 = () => {
  return (
    <>
    <section className="about section-padding" id="section_2">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-12">
        <img
          src={lalkila}
          className="about-image"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="col-lg-6 col-12 mt-5 mt-lg-0">
        <div className="about-thumb">
          <h3 className="pt-2 mb-3">
            Your Voters Are Online, You Should Be Too!
          </h3>
          <p>
            With 20+ years of experience and expertise, EnSpot Political has
            proven marketing solutions that reach, engage, and influence your
            supporters so you get the votes you need to win.
          </p>
        </div>
        <div className="section-main">
          <div className="section-title-new mb-4">
            <h2 className="text-white">
              330+ <span style={{ fontSize: "medium" }}>M</span>
            </h2>
            <p className="text-white">Views</p>
            <img src={three} className="avatar-image img-fluid" />
          </div>
          <div className="section-title-new mb-4">
            <h2 className="text-white">
              170+ <span style={{ fontSize: "medium" }}>M</span>
            </h2>
            <p className="text-white">Advertise</p>
            <img src={three} className="avatar-image img-fluid" />
          </div>
          <div className="section-title-new mb-4">
            <h2 className="text-white">650+</h2>
            <p className="text-white">Campaigns</p>
            <img src={three} className="avatar-image img-fluid" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a className="custom-btn btn" href="#section_5">
            Get Consulting
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Section2