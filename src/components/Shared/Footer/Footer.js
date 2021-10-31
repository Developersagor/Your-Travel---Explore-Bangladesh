import React from "react";
import "./Footer.css";
import payment from "../../../images/Screenshot_3.png";

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container ">
          <div className="row footer-container ">
            <div className="col-lg-4">
              <div>
                <div className="w-50 mx-auto footer-content ">
                  <h3>Support</h3> <hr />
                  <h6>Contact</h6>
                  <h6>Legal Notice</h6>
                  <h6>Privacy Policy</h6>
                  <h6>General Terms and Conditions</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-50 mx-auto footer-content ">
                <h3>Company</h3> <hr />
                <h6>About Us</h6>
                <h6>Careers</h6>
                <h6>Blog</h6>
                <h6>Magazine</h6>
                <h6>Gift Cards</h6>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="w-50  mx-auto footer-content ">
                <h3>Work With Us</h3> <hr />
                <h6>Become a Supplier</h6>
                <img className="w-75 " src={payment} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
