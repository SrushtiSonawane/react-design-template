import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const myStyle = {
    color: "white",
    backgroundColor: "#638889",
    fontFamily: "Sans-Serif",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
    border: "2px solid grey",
    width: "100%",
    position: "fixed",
    padding: "10px",
    top: 0
  };
  const new1 = {
    marginRight: "30px",
    fontFamily: "times new roman",
    paddingRight: "45px",
    fontSize: "35px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <header style={myStyle}>
      <nav style={myStyle}>
        <Link style={new1} to="/">
          Home
        </Link>
        <Link style={new1} to="/posts">
          posts
        </Link>
        <Link style={new1} to="/photos">
          photos
        </Link>
        <Link style={new1} to="/users">
          Users
        </Link>
      </nav>
    </header>
  );
}

export default Header;
