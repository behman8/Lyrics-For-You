import React from "react";
import { NavLink } from "react-router-dom";

function FavoritesCard({ favorite, addFavorite, user }) {

    // const [formData, setFormData] = useState({
    //     user_id: user.id,
    //     song_id: song.id
    // });

    // let foundFavorite = favorites.find(favorite => favorite.song_id === song.id)

    return(
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
                {/* <br/>
                {foundFavorite ? <button className="favorited" id="favorite-button" type="submit" onClick={(e) => addFavorite(formData)} >💖</button> : <button className="not-favorited" id="favorite-button" type="submit" onClick={(e) => addFavorite(formData)} >🖤</button>} */}
            </div>
        </div>
    )

};

export default FavoritesCard;