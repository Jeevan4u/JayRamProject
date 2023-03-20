import React from "react";
import facebook from "../../Assets/Facebook.png";
import insta from "../../Assets/Insta.png";
import music from "../../Assets/Music.png";
import scloud from "../../Assets/SoundCloud.png";
import yt from "../../Assets/Youtube.png";
import "./footer.css";
const Footer = () => {
  const footericons = [
    {
      icon: facebook,
    },
    {
      icon: insta,
    },
    {
      icon: music,
    },
    {
      icon: scloud,
    },
    {
      icon: yt,
    },
  ];
  return (
    <div className="Footer pt-2">
      <div className="footerlinks">
        {footericons.map((items, i) => (
          <div className="icons m-2">
            <img src={items.icon} alt="" />
          </div>
        ))}
      </div>
      <h5 className="text-center my-4"> BY : jeevan</h5>
    </div>
  );
};

export default Footer;
