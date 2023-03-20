import React, { useContext, useEffect } from "react";
import MyContext from "../../Context/MyContext";
import "./Playlist.css";
import isplayingAudio from "../../Assets/MusicIcons/playStatic.png";
const Playlist = () => {
  const { songsList, SetCurrent, currentSong, audioInput, isPlaying } =
    useContext(MyContext);
  useEffect(() => {
    if (!isPlaying) {
      audioInput.current.pause();
    } else {
      audioInput.current.play();
    }
  }, [isPlaying]);

  return (
    <div className="PlayList">
      <div className="playListContentsWrapper">
        {songsList.map((data, i) => (
          <div
            className={`Songslist ${currentSong === i && "Selected"}`}
            key={i}
            onClick={() => {
              SetCurrent(i);
            }}
          >
            <h1 className="index">{i}</h1>

            <div className="songsContents">
              <h5>{data.album}</h5>
              <h5 className="title">{data.albumTitle}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Playlist;
