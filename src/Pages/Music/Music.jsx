import React, { useContext } from "react";
import Banner from "../../components/Banner/Banner";
import img1 from "../../components/Header/images/1675391709529.jpg";
import Mycontext from "../../Context/MyContext";
import Actions from "../Components/Actions";
import Header from "../Components/Header";
import songpath from "../../Assets/Songs/Train.mp3";
import Playlist from "../Components/Playlist";
import Controls from "../Components/Controls";
import YoutubeCard from "../../components/YoutubeCard/Youtubecard";
import { NewsLetter } from "../../components/Partners/Partners";
const Music = () => {
  const { name } = useContext(Mycontext);

  const musicBanner = {
    img: img1,
    title: "Home > Music",
  };
  const youtubeDataMusic = {
    heading: "JayRam Works",

    ytlink: "https://www.youtube.com/embed/rOVvoSHaUL4",
    title: "Big Drum Bonanza Drum playthrough 2015 By Jay Ram",
  };
  return (
    <>
      <div className="Music-section">
        <Banner bannerData={musicBanner} />
      </div>
      <div className="Audio_player_wrapper">
        <div className="Audio_contents ">
          <Header />
          <Actions />
          <Playlist />
        </div>

        <Controls />
      </div>
      <YoutubeCard ytData={youtubeDataMusic} />
      <NewsLetter />
    </>
  );
};

export default Music;
