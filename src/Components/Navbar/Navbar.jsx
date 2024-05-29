import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        navRef.current.classList.add("nav-dark");
      } else {
        navRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <>
      <div ref={navRef} className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logo} alt="" onClick={() => navigate("/")} />
          </Link>
          <ul>
            <Link to="/login">
              <li>Home</li>
            </Link>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Polpular</li>
            <li>My List</li>
            <li>Browse My Languages</li>
          </ul>
        </div>
        <div className="navbar-right">
          <img src={search_icon} alt="" className="icons" />
          <p>Children</p>
          <img src={bell_icon} alt="" className="icons" />
          <div className="navbar-profile">
            <img src={profile_img} alt="" className="profile" />
            <img src={caret_icon} alt="" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
