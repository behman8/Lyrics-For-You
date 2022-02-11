import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";

function SongsContainer({ songs, user }) {

    const [favorites, setFavorites] = useState();
    
    useEffect(() => {
        fetch("/api/favorites")
            .then((resp) => resp.json())
            .then(data => setFavorites([...data]))
    }, []);

    const addFavorite = (songId) => {
        let params = {...songId}
        fetch("/api/favorites", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then((resp) => resp.json())
        .then(songId => {
            setFavorites(prev => {
                return [...prev, songId]
            })
        })
    }

    return(
        <div>
            <h1>Songs</h1>
            <br/>
            {songs.map(song => <SongCard key={song.id} song={song} user={user} addFavorite={addFavorite} />)}
        </div>
    )

};

export default SongsContainer;