import React from "react";
import "./Body.css";
import "./Search.css";
import Songrow from "./Songrow";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Search() {
  const [{ discover_weekly }, dispatch] = useStateValue();
  return (
    <div className="search">
      <div className="search_info">
        <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.owner?.display_name}</p>
        </div>
      </div>
      <div className="body_icons">
        <PlayCircleFilledWhiteIcon fontSize="large" className="body__shuffle" />
        <FavoriteIcon fontSize="large" className="body__dil" />
        <MoreHorizIcon fontSize="large" className="body__menu" />
      </div>
      {discover_weekly?.tracks.items.map((item) => (
        <Songrow track={item.track} />
      ))}
    </div>
  );
}

export default Search;
