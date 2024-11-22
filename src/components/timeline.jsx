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
                        <h2>Bachelor of Science - Graphic Information Technology, <em>Arizona State University</em> <span>2023-2025</span></h2>
                        <p>In 2023, I decided to take my skills to the next level by completing my bachelor's degree. I enrolled at Arizona State University, where I have expanded my design skills and honed my user experience abilities. Initially, I started on campus but transitioned to online classes to better balance employment opportunities, family time, and education. I anticipate graduating in the summer of 2025.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Full-Stack Developer Bootcamp, <em>University of Arizona</em> <span>2020-2021</span></h2>
                        <p>In October 2020, I began my Full-Stack Developer certification through the University of Arizona. Starting the bootcamp with experience in HTML, CSS, and JavaScript, I have significantly enhanced these skills. Additionally, I have developed a fundamental understanding of Express, Handlebars, MySQL, MongoDB, Node.js (and its many packages), React, and deployment strategies for both applications and databases.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Project Manager, <em>League of Historic American Theatres</em> <span>2021-2024</span></h2>
                        <p>During my tenure as a technical project manager at the League of Historic American Theatres (LHAT), I applied my front-end development skills extensively. I orchestrated and executed two complete website content and design overhauls, with the latest redesign completed in October 2022 to optimize performance and improve user experience. I also built, tested, and launched the annual conference mobile app, overseeing notification publication and maintenance throughout the event to ensure seamless communication. Additionally, I integrated advanced technologies to enhance efficiency, collaborating with internal teams and external agencies to implement new technology solutions, resulting in cost savings and improvements in staff efficiency and productivity. Although I no longer work at LHAT, my contributions significantly impacted the organization's digital presence and operational effectiveness.</p>
                      </div>
                    </div>
                  </article><article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Web Developer, <em>League of Historic American Theatres</em> <span>2013-2021</span></h2>
                        <p>At the start of my tenure with the League of Historic American Theatres (LHAT), I applied my front-end development skills extensively in the role of web developer. I developed and maintained website content and design, ensuring ongoing updates and enhancements to improve user experience and engagement. I designed and distributed monthly newsletters, quarterly magazines, and annual communications, ensuring seamless delivery across digital and print platforms to maintain strong member engagement. Additionally, I maintained and updated digital platforms by regularly posting articles, job postings, educational videos, and membership updates to the website and social media platforms, ensuring timely and relevant content delivery.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Additional Experience</h2>
                        <p>If you are interested in the rest of my experience, visit my LinkedIn profile or download my resume.</p>
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