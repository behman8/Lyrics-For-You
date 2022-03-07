import React from "react";
import UsersSongsCard from "../Components/UsersSongsCard";

function UsersSongsContainer({ user, songs, updateSong }) {

    return(
        <div>
            <h1 className="headers">Your Songs</h1>
            <br/>
            {songs.map(song => user.id === song.user_id ? <UsersSongsCard key={song.id} song={song} user={user} updateSong={updateSong} /> : null)}
        </div>
    )

};

export default UsersSongsContainer;