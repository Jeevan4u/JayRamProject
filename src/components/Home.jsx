import React from "react";
import HeaderBody from "./headerBody/HeaderBody";
import Aboutcard from "./Aboutcard/Aboutcard";
import About from "./AboutHim/About";
import Events from "./EventScheduel/Events";
import Partners from "./Partners/Partners";
import Youtubecard from "./YoutubeCard/Youtubecard";

const Home = () => {
  return (
    <div>
      <HeaderBody />
      <Aboutcard />
      <About />
      <Events />
      <Partners />
    </div>
  );
};

export default Home;
