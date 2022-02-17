import React from "react";
import { NavLink } from "react-router-dom";

function HomeCards({ song, user }) {

    if(user) {
        return(
            <div className="cards">
                <div className="inner-card">
                    <h2 className="labels">Title:</h2>
                    <NavLink to={`/songs/${song.id}`} className="nav"><p className="song-links">{song.title}</p></NavLink>
                    <br/>
                    <h3 className="labels">Artist:</h3>
                    <p className="data">{song.artist}</p>
                    <br/>
                    <h3 className="labels">Album:</h3>
                    <p className="data">{song.album}</p>
                </div>
            </div>
        )
    } else {
        return(
            <div className="cards">
                <div className="inner-card">
                    <h2 className="labels">Title:</h2>
                    <p className="data">{song.title}</p>
                    <br/>
                    <h3 className="labels">Artist:</h3>
                    <p className="data">{song.artist}</p>
                    <br/>
                    <h3 className="labels">Lyrics:</h3>
                    <p className="data">{`${song.lyrics.slice(0,101)}...`}</p>
                    <br/>
                    <h3 className="labels">Album:</h3>
                    <p className="data">{song.album}</p>
                </div>
            </div>
        )
    }
};

export default HomeCards;