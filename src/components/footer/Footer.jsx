
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Products</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Releases</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Company</h2>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Press</li>
            <li>News</li>
            <li>Media kit</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Resources</h2>
          <ul>
            <li>Blog</li>
            <li>NewsLetter</li>
            <li>Events</li>
            <li>Help Centres</li>
            <li>Tutorials</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h2>Socials</h2>
          <ul>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>Dribbble</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
