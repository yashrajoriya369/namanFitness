import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className="py-4 bg-secondary">
        <div className="container-xxl">
          <div>
            <div>
              <div className="d-flex justify-content-center">
              <PiTelegramLogo  className="fs-1 text-white"/>
                <h2 className="text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-12 mt-3">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <button className="input-group-text p-2 w-25" id="basic-addon2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="column">
            <div className="col-8">
              <h4 className="text-dark mb-4">Contact Us</h4>
              <div>
                <address className="text-dark fs-6">
                  Hno : 277 Near Sahyog Nagar, <br /> Bharatpur, Rajasthan <br />
                  PinCode: 321001
                </address>
                <a
                  href="tel:+91 0000000000"
                  className="mt-3 d-block mb-1 text-dark"
                >
                  +91 0000000000
                </a>
                <a
                  href="tel:+91 0000000000"
                  className="mt-2 d-block mb-0 text-dark"
                >
                  abc@gmail.com{" "}
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-dark me-3" href="/">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-dark me-3" href="/">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-dark me-3" href="/">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="text-dark me-3" href="/">
                    <BsInstagram className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <h4 className="text-dark mb-2 mt-5">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-dark py-2 text-decoration-none">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-dark py-2 text-decoration-none">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-dark py-2 text-decoration-none">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="text-dark py-2 text-decoration-none"
                >
                  Terms & Conditions
                </Link>
                <Link to="/blogs" className="text-dark py-2 text-decoration-none">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-dark mt-5">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/aboutus" className="text-dark py-2 text-decoration-none">About Us</Link>
                <Link to="/contact" className="text-dark py-2 text-decoration-none">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-dark">
                &copy;{new Date().getFullYear()} ; Powered by Naman Choudhary
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
