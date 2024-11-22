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
                      I am a certified full stack developer with over 15 years of experience developing and maintaining websites using HTML, CSS, JavaScript, and WYSIWYG editors like WordPress. I have extensive experience supporting marketing teams in various roles, using creative applications like Adobe InDesign, Photoshop, and Illustrator. My passion for creating and maintaining websites led me to earn a Web Master's Certification and an Associate of Arts in Information Technology.
                      </p>
                      <p>
                      I continuously build on my experience through various resources and training to keep my skills competitive, and am currently working on a Bachelor of Science in Graphic Information Technology, Full Stack Developement at Arizona State University. When web development expanded to include new technologies and principles, I committed to updating my knowledge and becoming recertified in a modern context. While my expertise is primarily in web browser-based sites and applications, I have also applied my skills to create, program, and implement interactive web controls for user automation stations used in a petroleum refinery.
                      </p>
                      <p>
                      Outside of web development, my family is my top priority. I am a committed mother of two beautiful daughters and enjoy being an active participant in their education and extracurricular activities. I find immense joy in supporting their academic growth and cheering them on at their various events and practices.
                      </p>
                      <p>
                      When I'm not coding or spending time with my family, I love getting creative in the kitchen. Cooking and baking are my passions, and I often find myself experimenting with new recipes and creating elaborate confections. Whether I'm crafting a new dish for dinner or baking intricate desserts, the kitchen is my happy place where I can express my creativity and share delicious moments with my loved ones.
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
                    I have experience building websites using HTML, CSS, JavaScript, and React. Additionally, I am proficient in using a variety of WYSIWYG and "self-build" platforms like WordPress.<br />
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
                    I have successfully developed applications utilizing MySQL and MongoDB. Additionally, I have experience with Bootstrap, React, and p5.js.I am currently seeking an opportunity to further expand my experience and skill set.
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
                    I have experience in the development and deployment of mobile apps, email marketing creatives and campaigns, and social media marketing campaigns.
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
                    I have experience creating both printed and digital products using Adobe InDesign, as well as manipulating images and creating graphics with Photoshop. Additionally, I am skilled in using Adobe Illustrator for digital and print media creation.
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
