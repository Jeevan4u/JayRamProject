import "./Headerbody.css";
import React from "react";
import { FaYoutube } from "react-icons/fa";
import BornwithDisgrace from "../../Assets/BG_VID/BornwithDisgrace.mp4";
const HeaderBody = () => {
  return (
    <>
      <div className="contents-wrapper">
        <video
          src={BornwithDisgrace}
          muted
          loop
          id="kaal"
          type="video/mp4"
          autoPlay
        ></video>
        <div className="wraps">
          <div className="title">
            <h3 className="main-title text-center fw-bold">
              I am Jayram Karki dummy text
            </h3>
          </div>
          <div className="sub-title py-3">
            <h5 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse
            </h5>
          </div>
          <div className="buttons py-3">
            <button className="readmore">Read More</button>
            <button className="watch">
              Play <FaYoutube className="icons" />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderBody;
