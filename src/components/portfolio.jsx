import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-work" data-section="portfolio">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">My Work</span>
                <h2 className="colorlib-heading animate-box">
                  An abbreviated list of applications from my portfolio
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-1.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Burger Eater</a>
                      </h3>
                      <span>Resturant app for the virtual ordering and consumption of burgers.</span>
                      <p className="icon">
                        <span>
                          <a href="https://youtu.be/5ZNYhutNckw" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo
                          </a>
                        </span>
                        <span>
                          <a href="https://salty-sierra-88581.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/TreeGee73/Burger-Eater" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-2.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Move It</a>
                      </h3>
                      <span>Fitness Tracker for tracking daily workouts and exercises.</span>
                      <p className="icon">
                        <span>
                          <a href="https://youtu.be/WBs3yf6RkR8" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo
                          </a>
                        </span>
                        <span>
                          <a href="https://shrouded-springs-06094.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/TreeGee73/Move-It" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInTop"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-3.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Ascend</a>
                      </h3>
                      <span>Button-click game app with character selection and random encounters.</span>
                      <p className="icon">
                        {/* <span>
                          <a href="https://youtu.be/WBs3yf6RkR8" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo
                          </a>
                        </span> */}
                        <span>
                          <a href="https://ascendproject.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/TreeGee73/Ascend" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInBottom"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-4.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">COVID-19 Dashboard</a>
                      </h3>
                      <span>An interactive dashboard for obtaining realtime data on COVID-19 by state or country.</span>
                      <p className="icon">
                        {/* <span>
                          <a href="https://youtu.be/WBs3yf6RkR8" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo
                          </a>
                        </span> */}
                        <span>
                          <a href="https://anandlal1080.github.io/covid19-dashboard/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span>
                        <span>
                          <a href="https://github.com/TreeGee73/covid19-dashboard-project1" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-5.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Team Portfolio Generator</a>
                      </h3>
                      <span>A command-line application that accepts user input to generate an HTML webpage.</span>
                      <p className="icon">
                        <span>
                          <a href="https://youtu.be/XwDZOvQD080" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo
                          </a>
                        </span>
                        {/* <span>
                          <a href="https://anandlal1080.github.io/covid19-dashboard/" target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span> */}
                        <span>
                          <a href="https://github.com/TreeGee73/Team-Profile-Generator" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-4 animate-box"
                data-animate-effect="fadeInRight"
              >
                <div
                  className="project"
                  style={{ backgroundImage: "url(images/img-6.jpg)" }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="work.html">Team Tracker</a>
                      </h3>
                      <span>Pokemon themed CLI content management solution for managing a company's employees.</span>
                      <p className="icon">
                        <span>
                          <a href="https://youtu.be/xMOKVi3SfCU" target="_blank" rel="noopener noreferrer">
                            <i className="icon-play4" /> Demo.
                          </a>
                        </span>
                        {/* <span>
                          <a href="https://anandlal1080.github.io/covid19-dashboard/"  target="_blank" rel="noopener noreferrer">
                            <i className="icon-world" /> Deployed App
                          </a>
                        </span> */}
                        <span>
                          <a href="https://github.com/TreeGee73/Team-Tracker" target="_blank" rel="noopener noreferrer">
                            <i className="icon-github" /> Repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 animate-box">
                <p>
                  <a href="https://github.com/TreeGee73" className="btn btn-primary btn-lg btn-load-more" target="_blank" rel="noopener noreferrer">
                    View more <i className="icon-github" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
