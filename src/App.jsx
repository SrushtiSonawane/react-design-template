import React from "react";
import "./App.css"
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Photos from "./components/photos/Photos";
import Posts from "./components/posts/Posts";
import Users from "./components/users/Users";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="wrapper">
    <BrowserRouter>
      <Header />
      <div style={{
        marginTop: "8.75vmin",
        color: "white"
      }}>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </div>
      
      <Footer />
    </BrowserRouter></div>
  );
}
