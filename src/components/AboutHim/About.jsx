import React from "react";
import "./about.css";
import Jay from "../Header/images/about.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="Main-container">
      <div className="container">
        <div className="img-text-container">
          <div className="img-container py-3">
            <img src={Jay} alt="" />
          </div>
          <div className="text-container p-5">
            <p className="fw-bold ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              ipsum repudiandae dolorum, officia delectus sint corrupti ipsam
              ipsa alias tempora minus! Quia assumenda pariatur ad? Dolores enim
              necessitatibus fugit adipisci.
            </p>
            <p className="fw-bold">
              Read Jay's full bio{" "}
              <span className="Read" onClick={() => navigate("/about")}>
                HERE
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
