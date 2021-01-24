import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack Developer Bootcamp, <em>University of Arizona</em> <span>2020-2021</span></h2>
                        <p>In October 2020, I embarked on my Full-Stack Developer certification through the University of Arizona. I started the bootcamp with HTML, CSS, and JavaScript experience. Through this program, I've greatly improved those skills and developed a fundimental understanding of Express, Handlebars, MySQL, Mongo, NodeJS (and it's many packages), React, and deployment strategies for both apps and databases.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Interactive Marketing Manager, <em>League of Historic American Theatres</em> <span>2013-Present</span></h2>
                        <p>In my role as interactive marketing manager, have been applying my frontend development skills practically at the League of Historic American Theatres (LHAT). In 2015, I implimented a full redesign and migration of the LHAT website. I presently maintain the site, along with other duties, and am preparing for a redesign of the nonprofit's homepage and integrated services pages.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Marketing Project Manager, <em>Bank of America</em> <span>2016</span></h2>
                        <p>I held a contract position with Bank of America as a project manager in the Affinity/High Networth marketing group. In addition to executing various marketing projects, I was also responsible for the updating of existing and creation of new online webpages and materials for use by client managers across the organization.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}