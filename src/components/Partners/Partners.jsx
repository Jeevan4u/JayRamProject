import React from "react";
import "./Partners.css";
import Image1 from "../../Assets/partners/kaalnew.png";
import Image2 from "../../Assets/partners/2.jpg";
import Image3 from "../../Assets/partners/death.jpg";
import Image4 from "../../Assets/partners/157946565_265476245170135_617770182391250036_n.jpg";
import Image5 from "../../Assets/partners/partners.jpg";
import Image6 from "../../Assets/partners/TMRnew.png";
import Youtubecard from "../YoutubeCard/Youtubecard";
const Partners = () => {
  const youtubeDataHome = {
    heading: "View Jay's Latest Work",

    ytlink: "https://www.youtube.com/embed/ZagEtF7JvqI",
    title: "Kaal - Born with Disgrace - Official Music Video",
  };
  return (
    <div class="container-fluid">
      <div className="Partners">
        <h2 className="text-center py-5">Partners</h2>
        <div className="row">
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image1} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image2} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image3} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image4} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image5} alt="" />
          </div>
          <div className="col-4 d-flex justify-content-center my-3">
            <img src={Image6} alt="" />
          </div>
        </div>
      </div>
      <Youtubecard ytData={youtubeDataHome} />

      <NewsLetter />
    </div>
  );
};

export default Partners;

export function NewsLetter({}) {
  return (
    <div className="newsLetter d-flex flex-column my-4 py-5 justify-content-center align-items-center">
      <h4>Join My Mailing List for news and updates!</h4>
      <div className="form">
        <form action="">
          <div className="wrapper p-3">
            <input
              type="text"
              className="p-2"
              placeholder="Enter Your Email Here"
            />
            <button className="p-2 mx-4">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  );
}
