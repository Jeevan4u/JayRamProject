import React, { useContext, useRef, useState } from "react";
import Alb from "../../Assets/partners/death.jpg";
import MyContext from "../../Context/MyContext";
import "./Actions.css";
import Play from "../../Assets/MusicIcons/play.gif";
import Pause from "../../Assets/MusicIcons/Pause.png";
import fav from "../../Assets/MusicIcons/fav.png";

const Actions = () => {
  const {
    audioInput,
    TogglePlay,
    isPlaying,
    currentSong,
    progress,
    songsList,
    duration,
  } = useContext(MyContext);

  const clickRef = useRef();
  const checkWidth = (e) => {
    let width = clickRef.current.clientWidth;
    let offset = e.nativeEvent.offsetX;

    const divProgress = (offset / width) * 100;

    audioInput.current.currentTime = (divProgress / 100) * duration;
  };

  const minutes = parseInt(audioInput.current?.duration / 60);
  console.log(minutes);
  // const [progress, setProgress] = useState(0);

  // const Progressbar = () => {
  //   const duration = audioInput.current.duration;
  //   const ct = audioInput.current.currentTime;

  //   setProgress({
  //     ...progress,
  //     progress: (ct / duration) * 100,
  //     length: duration,
  //   });
  // };
  return (
    <div className="Actions">
      <div className="row">
        <div className="col-lg-4 img-cont">
          <img src={songsList[currentSong].songImg} alt="" />
        </div>
        <div className="col-lg-8 text-cont">
          <h1 className="h1 pt-4">
            {songsList[currentSong].album}-{minutes}
            min
          </h1>
          <h3 className="h3 lh-base">{songsList[currentSong].songDes}</h3>

          <div className="play_Progress w-100 d-flex align-items-center">
            <div
              className="playIcon my-4 d-flex"
              onClick={(e) => {
                TogglePlay();
              }}
            >
              <img src={`${isPlaying ? Pause : Play}`} alt="" />
            </div>

            <div
              className="ProgressBar mx-3"
              ref={clickRef}
              onClick={checkWidth}
            >
              <div
                className="seek_bar"
                style={{ width: `${progress + "%"}` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
