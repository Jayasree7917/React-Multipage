import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <section className="main">
        <div id="particles-js">
          <div className="heading">
            <h1>SAENITD</h1>
            <p>We are the society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p>
          </div>
        </div>
      </section>

      <div className="animated-line"></div>

      <section className="boxes">
        <div id="testimonial-box" className="container">
          <div className="subheading">
            <h2>We are present at</h2>
            <p>
              Various events and fests and numerous competitions and projects, we are not tires but enthusiast enough to achieve the sky
            </p>
          </div>
          {/* Card Container */}
          <div className="card-container">
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>Aarohan</h2>
                    <br />
                    <strong>Annual Fest</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title">
                      The vibrant college life is incomplete without a fest and constitutes a major part of the life of students. It etches a mark on the academic calendar, and students look forward to the dates.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>Tech Fest</h2>
                    <br />
                    <strong>Technology Conference</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title">
                      An exciting event showcasing the latest in technology and innovation. A hub for tech enthusiasts to explore and network.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <div className="back">
                  <div className="back-content">
                    <h2>Cultural Gala</h2>
                    <br />
                    <strong>Cultural Fest</strong>
                  </div>
                </div>
                <div className="front">
                  <div className="front-content">
                    <div className="title">
                      A celebration of diverse cultures with performances, food, and activities. An opportunity to experience and enjoy cultural richness.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
