"use client";

import React from "react";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="contact-section gray-bg cs-pt-130">
      <div className="wave-bg-section-top-one"></div>
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>
            Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor coli incididunt ut labore Lorem ipsum madolor sit
            amet, consectetur adipisicing incididunt.
          </p>
        </div>

        <div className="row">
          <div className="col-md-4 col-lg-4">
            <div className="single-contact-info">
              <i className="icofont-location-pin"></i>
              <h3>Office Address:</h3>
              <p>2750 Quadra Street Victoria, Canada.</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="single-contact-info">
              <i className="icofont-envelope"></i>
              <h3>E-mail Address:</h3>
              <p>jibo@gmail.com</p>
            </div>
          </div>

          <div className="col-md-4 col-lg-4">
            <div className="single-contact-info">
              <i className="icofont icofont-phone"></i>
              <h3>Phone Number:</h3>
              <p>+324-9442-515</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="number"
                    placeholder="Phone number"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="form-group">
                  <textarea
                    name="text"
                    cols={30}
                    rows={6}
                    placeholder="Write your message..."
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <div className="col-lg-12 col-sm-12 text-center">
                <button type="submit" className="default-button">
                  Send Message
                  <i className="icofont-arrow-right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
