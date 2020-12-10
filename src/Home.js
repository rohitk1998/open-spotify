import React from "react";
import "./Home.css";
import { useStateValue } from "./StateProvider";

function Home({ Spotify }) {
  const [{ allbums, playlists }, dispatch] = useStateValue();
  return (
    <div className="home">
      <div className="home__lists">
        {playlists?.items?.map((item) => (
          <div className="track__card">
            <img src={item.images[1]?.url} alt="" />
            <strong>
              {" "}
              <p>{item.type}</p>
            </strong>
            <h4>{item.name}</h4>
            <p>{item.owner?.display_name}</p>
          </div>
        ))}
      </div>
      <div className="home__lists">
        {playlists?.items?.map((item) => (
          <div className="track__card">
            <img src={item.images[1]?.url} alt="" />
            <strong>
              {" "}
              <p>{item.type}</p>
            </strong>
            <h4>{item.name}</h4>
            <p>{item.owner?.display_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
