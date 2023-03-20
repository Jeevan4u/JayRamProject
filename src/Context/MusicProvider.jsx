import React, { useReducer, useRef } from "react";
import MyContext from "./MyContext";
import { SongsList } from "../SongsList";
import playerReducer from "./PlayerReducer";
export default function MusicProvider(props) {
  const INITAL_STATE = {
    currentSong: 0,
    songsList: SongsList ? SongsList : null,
    isPlaying: false,
    repeat: false,
    progress: 0,
    duration: 0,
  };
  const [state, dispatch] = useReducer(playerReducer, INITAL_STATE);

  const audioInput = useRef(null);

  const SetCurrent = (id) => {
    dispatch({ type: "SET_CURRENT_SONG", data: id });
  };

  const TogglePlay = () => {
    dispatch({
      type: "TOGGLE_PLAYING",
      data: !state.isPlaying,
    });
  };
  const Progressbar = () => {
    let duration = audioInput.current.duration;
    let ct = audioInput.current.currentTime;

    dispatch({
      type: "PROGRESS_BAR",
      data: { progress: (ct / duration) * 100, total: duration },
    });
  };

  console.log(state.progress, state.duration, state.progress);
  return (
    <>
      <MyContext.Provider
        value={{
          currentSong: state.currentSong,
          songsList: state.songsList,
          isPlaying: state.isPlaying,
          repeat: state.repeat,
          progress: state.progress,
          SetCurrent,
          audioInput,
          TogglePlay,
          dispatch,
          Progressbar,
          duration: state.duration,
        }}
      >
        {props.children}
      </MyContext.Provider>
    </>
  );
}
