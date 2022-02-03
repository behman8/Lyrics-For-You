import React from "react";
import HomeCards from "./HomeCards";

function Home({ songs, user }) {

    let selectedSongs = songs.slice(0,4)

    return(
        <div>
            <h1>Home</h1>
            {selectedSongs.map(song => <HomeCards key={song.id} song={song} user={user} />)}
        </div>
    )

};

export default Home;