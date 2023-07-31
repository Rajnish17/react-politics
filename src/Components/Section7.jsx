import React from 'react'
import image2 from "./images/image2.png"
import image1 from "./images/image.png"

const Section7 = () => {
  return (
    <>
    
    <section className="projects" id="section_4">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 col-md-12 col-12 ms-auto mb-5">
        <div className="section-title">
          <h2 className="text-white ms-4">
            Be Equipped with the Right Resources
          </h2>
          <small className="projects-tag text-white">
            Everything and anything you need to know about EnSpot Political and
            campaigning in the digital space is just a click away.
          </small>
        </div>
      </div>


      
      <div className="clearfix" />
      <div className="containers ">
        <div className="cards">
          <div className="face face1">
            <div className="contents">
              <div className="icon">
                <img src={image1} className="kit" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="contents">
              <h3>
                <a
                  href="https://www.linkedin.com/in/adamdipinto/"
                  target="_blank"
                >
                  _adamdipinto
                </a>
              </h3>
              <p>
                This is where I network and build my professional protfolio.
              </p>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="face face1">
            <div className="contents">
              <div className="icon">
                <img src={image2} className="kit" />
              </div>
            </div>
          </div>
          <div className="face face2">
            <div className="contents">
              <h3>
                <a href="https://twitter.com/AdamDipinto" target="_blank">
                  @AdamDipinto
                </a>
              </h3>
              <p>
                This is where I read news and network with different social
                groups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default Section7