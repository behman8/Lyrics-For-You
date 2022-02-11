import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function SongCard({ song, user, addFavorite }) {

    const [formData, setFormData] = useState({
        user_id: user.id,
        song_id: song.id
    });

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
            <button id="favorite-button" type="submit" onClick={(e) => addFavorite(formData)} >❤️</button>
        </div>
    )

};

export default SongCard;