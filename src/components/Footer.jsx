import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div></div>
      <div>
        <h3>Follow Us</h3>
        <p>Connect with us on social media:</p>
      </div>
      <div>
       
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#638889",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
  position: "fixed",
  insetInline: 0,
  bottom: 0
};

export default Footer;
