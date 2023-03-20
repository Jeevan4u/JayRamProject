import { useContext } from "react";
import MyContext from "../../Context/MyContext";
import "./Header.css";
const Header = () => {
  const { currentSong, songsList } = useContext(MyContext);
  return (
    <div className="Header">
      <h1 className="Songs_title">
        Playing - {songsList[currentSong].songName}
      </h1>
    </div>
  );
};

export default Header;
