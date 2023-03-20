import React from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderBody from "../headerBody/HeaderBody";
import "./header.css";
import Logo2 from "./images/logo1.png";
// import Logo3 from './images/Main_image.jpg'
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="container-fluid">
          <div className="navbar d-flex justify-content-between">
            <div className="nav-logo py-2">
              <Link to="/" className="nav-link " aria-current="page">
                <img src={Logo2} className="logo" alt="" />
              </Link>
            </div>

            <ul className="nav-list d-flex justify-content-between">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/music" className="nav-link">
                  Music
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/tour" className="nav-link">
                  Tour
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to="/faq" className="nav-link">
                  Education
                </Link>
              </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>

            <button
              className="Contact"
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact me
            </button>
          </div>
        </div>
        {/* <HeaderBody /> */}
      </div>
    </>
  );
};

export default Header;
