import React from "react";
import { NavLink } from "react-router-dom";

function FavoritesCard({ favorite, handleDelete }) {

    return(
        <div>
            {!!favorite.song ?
            <div className="cards">
                <div className="inner-card">
                    <h2 className="labels">Title:</h2>
                    <NavLink to={`/songs/${favorite.song.id}`} className="nav"><p className="song-links">{favorite.song.title}</p></NavLink>
                    <br/>
                    <h3 className="labels">Artist:</h3>
                    <p className="data">{favorite.song.artist}</p>
                    <br/>
                    <h3 className="labels">Album:</h3>
                    <p className="data">{favorite.song.album}</p>
                    <br/>
                    <button className="favorited" id="favorite-button" type="submit" onClick={(e) => handleDelete(favorite.id)} >💖</button>
                </div>
            </div> 
            :
            <div>
                Loading favorites...
            </div>
            }
        </div>
    )
};

export default FavoritesCard;