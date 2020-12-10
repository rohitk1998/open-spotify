import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt=""
        />
      </div>

      <Link to="/">
        <SidebarOption Icon={HomeIcon} title="Home" />
      </Link>
      <Link to="/search">
        {" "}
        <SidebarOption Icon={SearchIcon} title="Search" />
      </Link>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />

      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
