import React from "react";
import "./banner.css";
const Banner = ({ bannerData }) => {
  return (
    <div className="Banner-Container">
      <div className="img-wrapper">
        <img src={bannerData.img} alt="" />
        <div className="img-overlay">
          <h2 className="ps-5 pb-3">{bannerData.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
