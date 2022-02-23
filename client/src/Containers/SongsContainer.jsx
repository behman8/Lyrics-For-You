import React, { useEffect, useState } from "react";
import SongCard from "../Components/SongCard";

function SongsContainer({ songs, user }) {

    const [favorites, setFavorites] = useState([{song_id: 0, user_id: 0}]);

    useEffect(() => {
        fetch("/api/favorites")
            .then((resp) => resp.json())
            .then(data => setFavorites([...data]))
    }, []);

     const addFavorite = (songId) => {
         console.log(favorites)
        let params = {...songId}
          favorites.map(favorite =>
            params.song_id !== favorite.song_id
            ?
            fetch("/api/favorites", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(params)
                })
                .then((resp) => resp.json())
                .then((songId) =>
                    setFavorites((prev) => {
                        return [...prev, songId]
                    })
            )
            :
            null 
         )
     }

    return(
        <div>
            <h1 className="headers">Songs</h1>
            <br/>
            {songs.map(song => <SongCard key={song.id} song={song} user={user} addFavorite={addFavorite} />)}
        </div>
    )

};

export default SongsContainer;