import React from "react";
import { NavLink } from "react-router-dom";

function SongCard({ song }) {

    return(
        <div>
            <h2>Title:</h2>
            <NavLink to={`/api/songs/${song.id}`} ><p>{song.title}</p></NavLink>
            <br/>
            <h3>Artist:</h3>
            <p>{song.artist}</p>
            <br/>
            <h3>Album:</h3>
            <p>{song.album}</p>
            <br/>
        </div>
    )

};

export default SongCard;