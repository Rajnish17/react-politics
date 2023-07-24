import React from 'react'
import contract from "./images/no_contract.png"

const Section6 = () => {
  return (
    <>
    <section className="projects section-padding" id="section_4">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-12 ms-auto">
        <div className="section-title">
          
          <h2 className="text-white ms-4 mb-0">
            Why Political Candidates Trust Us
          </h2>
          <small className="projects-tag text-white">
            Here are the primary reasons why EnSpot Political is a trusted
            partner for political campaigning.
          </small>
        </div>
      </div>
      <div className="clearfix" />
      <div
        className="projects-thumb-new d-flex"
        style={{ paddingLeft: 120, paddingBottom: 10 }}
      >
        <div className="col-lg-4 col-md-6 col-12 mt-3">
          <a className="card education" href="#">
            <div className="overlay" />
            <div className="circle">
              <img
                src={contract}
                className="projects-image "
                alt=""
              />
            </div>
            <p style={{ fontWeight: "bold", color: "#535da1" }}>
              No Long-Term Contracts
            </p>
            <p style={{ textAlign: "center", fontSize: "small" }}>
              Don’t Get Locked Up By Long-Term Contracts, Be In Control When You
              Work With Us
            </p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-3">
          <a className="card education" href="#">
            <div className="overlay" />
            <div className="circle">
              <img
                src={contract}
                className="projects-image "
                alt=""
              />
            </div>
            <p style={{ fontWeight: "bold", color: "#535da1" }}>
              No Long-Term Contracts
            </p>
            <p style={{ textAlign: "center", fontSize: "small" }}>
              Don’t Get Locked Up By Long-Term Contracts, Be In Control When You
              Work With Us
            </p>
          </a>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mt-3">
          <a className="card education" href="#">
            <div className="overlay" />
            <div className="circle">
              <img
                src={contract}
                className="projects-image "
                alt=""
              />
            </div>
            <p style={{ fontWeight: "bold", color: "#535da1" }}>
              No Long-Term Contracts
            </p>
            <p style={{ textAlign: "center", fontSize: "small" }}>
              Don’t Get Locked Up By Long-Term Contracts, Be In Control When You
              Work With Us
            </p>
          </a>
        </div>
      </div>
              
    </div>
  </div>
</section>

    
    </>
  )
}

export default Section6