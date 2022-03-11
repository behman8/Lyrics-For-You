import React from "react";
import HomeCards from "../Components/HomeCards"

function Home({ songs, user }) {

    let selectedSongs = songs.slice(0,4)

    return(
        <div>
            <h1 className="headers">A Taste of Lyrics For You</h1>
            <br/>
            {selectedSongs.map(song => <HomeCards key={song.id} song={song} user={user} />)}
        </div>
    )

};

export default Home;