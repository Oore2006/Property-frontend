import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="first">
        <h2>Real Estate</h2>
        <p> Join our community of passionate bidders today and embark on your
        journey to new discoveries and unbeatable deals. Bid, win, and thrive
        with BidzBuddy.</p>
      </div>
      <div className="navigation">
        <h2>Navigation </h2>
        <p>All products</p>
        <p>How it works</p>
        <p>Sign up</p>
        <p>About Company</p>

      </div>
      <div className="faqs">
        <h2>Help & FAQS</h2>
        <p>Help Center</p>
        <p>Customer FAQs</p>
        <p>Terms and Conditions</p>
        <p>Security and information</p>
        <p>Merchant add Policy</p>
      </div>
        <div className="connect">
            <div className="us">
            <h2>Connect with us</h2>
            </div>

            <div className="img">
              <p>
                  <img src="./facebook.png" alt="" />
                  {/* <a href="https://www.flaticon.com/free-icons/instagram" title="instagram icons">Instagram icons created by edt.im - Flaticon</a> */}
              </p>    
              <p>
                  <img src="./instagram.png" alt="" />
                  {/* <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Bogdan Rosu - Flaticon</a> */}
              </p>
              <p>
                  <img src="./linkedin-logo.png" alt="" />
                  {/* <a href="https://www.flaticon.com/free-icons/twitter" title="twitter icons">Twitter icons created by Dave Gandy - Flaticon</a> */}
              </p>   
              <p>
                  <img src="./twitter-sign.png" alt="" />
              </p>
          </div>
        </div>

    </footer>
  );
};

export default Footer;
