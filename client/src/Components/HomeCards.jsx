import React from "react";
import { NavLink } from "react-router-dom";

function HomeCards({ song, user }) {

    if(user) {
        return(
            <div className="home-cards">
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
    } else {
        return(
            <div className="home-cards">
                <h2>Title:</h2>
                <p>{song.title}</p>
                <br/>
                <h3>Artist:</h3>
                <p>{song.artist}</p>
                <br/>
                <h3>Lyrics:</h3>
                <p>{`${song.lyrics.slice(0,101)}...`}</p>
                <br/>
                <h3>Album:</h3>
                <p>{song.album}</p>
                <br/>
            </div>
        )
    }
};

export default HomeCards;