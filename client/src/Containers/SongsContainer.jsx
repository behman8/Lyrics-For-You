import React from "react";
import SongCard from "../Components/SongCard";

function SongsContainer({ songs }) {

    return(
        <div>
            <h1>Songs</h1>
            {songs.map(song => <SongCard key={song.id} song={song} />)}
        </div>
    )

};

export default SongsContainer;