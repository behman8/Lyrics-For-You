import React from "react";
import SongCard from "../Components/SongCard";

function SongsContainer({ songs, user, favorites, addFavorite, handleDelete }) {

    return(
        <div>
            <h1 className="headers">Songs</h1>
            <br/>
            {songs.map(song => <SongCard key={song.id} song={song} user={user} addFavorite={addFavorite} favorites={favorites} handleDelete={handleDelete} />)}
        </div>
    )

};

export default SongsContainer;