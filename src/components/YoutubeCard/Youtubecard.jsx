import React from "react";
import "./yt.css";

const Youtubecard = ({ ytData }) => {
  return (
    <div className="container p-5 Youtube">
      <div className="Heading_YT">
        <h1>{ytData.heading}</h1>
      </div>
      <div class="ratio ratio-16x9 iframeContainer">
        <iframe
          src={ytData.ytlink}
          title={ytData.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Youtubecard;
