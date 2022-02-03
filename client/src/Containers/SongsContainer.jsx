import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";

function SongsContainer({ user }) {

    const [songs, setSongs] = useState([])

    useEffect(() => {
        fetch("/api/songs")
            .then((resp) => resp.json())
            .then(data => setSongs([...data]))
    }, []);

    return(
        <div>
            <h1>Songs</h1>
            {songs.map(song => <SongCard key={song.id} song={song} />)}
        </div>
    )

};

export default SongsContainer;