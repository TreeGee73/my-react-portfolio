/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { Component } from "react";

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/about.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Theresa<br/>'TreeGee'<br />Grier</a>
              </h1>
              <span className="email">
                <i className="icon-mail"></i> theresa@thegriers.org
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#home" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="portfolio">
                      Portfolio
                    </a>
                  </li>
                  {/* <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li> */}
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                  <li>
                    <a href="#timeline" data-nav-section="timeline">
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/theresa-grier/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/TreeGee73"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>       
                <a
                    href="https://1drv.ms/b/s!AoC-TTrRL_1y9mwO5bvnZG4MJEt2?e=G5R1NQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-file"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Made with <i className="icon-heart" aria-hidden="true" /> and{" "}
                  <i className="icon-coffee" aria-hidden="true"></i>
                </small>
              </p>
              <p>
                <small>&copy;2024 TMG</small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}
