import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About Me</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I am a (soon to be) certified full stack developer, with
                        an Associates of Science degree in Information
                        Techonology with a Visual Communications concentration
                        and over 15-years of experience developing and
                        maintaining web sites using HTML, CSS, JavaScript, and
                        WYSIWYG editors like Wordpress.
                      </p>
                      <p>
                        I got my Web Master's Certification in 2020 and have
                        utilized various resources and training to gradually
                        build on my outdated experience to keep my skills
                        competative, but when web development expanded to
                        include a myriad of new technologies and principles I
                        committed to bringing my knowledge fully up to date and
                        become recertified in a modern context.
                      </p>
                      <p>
                        Though my experience has been in web browser based sites
                        and applications, I have also applied my skills to
                        create, program, and impliment interactive web controls
                        for user automation stations used in a petrolium
                        refinery.
                      </p>
                      <p>
                        Besides being passionate about web development, I enjoy
                        a multitude of other things but my family always comes
                        first. I don't know if it's something that is shared
                        with other folks who enjoy programming, but I am an avid
                        cook and baker. I enjoy spending time in the kitchen
                        creating new dishes or baking (what can be elaborate)
                        confections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">What I do</span>
                <h2 className="colorlib-heading">Some of my expertise</h2>
              </div>
            </div>
            <div className="row row-pt-md">
              <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                  <span className="icon">
                    <i className="icon-bulb" />
                  </span>
                  <div className="desc">
                    <h3>Web Development</h3>
                    <p>
                      I have experience building websites using HTML, CSS,
                      JavaScript, and React. <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                  <span className="icon">
                    <i className="icon-data" />
                  </span>
                  <div className="desc">
                    <h3>Full-Stack Development</h3>
                    <p>
                      I have successfully developed applications that utilized
                      MySQL and MongoDB, am currently seeking an opportunity to
                      expand my experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                  <span className="icon">
                    <i className="icon-phone3" />
                  </span>
                  <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>
                      I have experience with mobile app development, email
                      marketing (creative and campaign development), and social
                      media marketing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                  <span className="icon">
                    <i className="icon-layers2" />
                  </span>
                  <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>
                      I have successfully created printed and digital products
                      using Adobe inDesign. I am also pretty handy with
                      Photoshop and can manipulate images and create graphics
                      when needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
