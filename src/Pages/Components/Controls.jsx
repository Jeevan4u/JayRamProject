import React, { useContext } from "react";
import MyContext from "../../Context/MyContext";
import "./Control.css";
const Controls = () => {
  const { currentSong, songsList, audioInput, Progressbar } =
    useContext(MyContext);
  return (
    <div className="Controls">
      <audio
        ref={audioInput}
        autoPlay={true}
        onTimeUpdate={() => Progressbar()}
        src={songsList[currentSong].songURL}
        type="audio/mpeg"
      ></audio>
      {/* <div className="playIcon">
        <h1
          onClick={(e) => {
            TogglePlay(e);
            if (isPlaying) {
              audioInput.current.pause();
            } else {
              audioInput.current.play();
            }
          }}
        >
          P
        </h1>
      </div> */}
    </div>
  );
};

export default Controls;
