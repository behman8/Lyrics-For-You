import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongShow({ songs }) {
console.log(songs)
    const [song, setSong] = useState([])
    const { id } = useParams()

    useEffect(() => {
        if(!!songs) {
          let selectedSong = songs.find(song => song.id === Number(id))
          setSong({...selectedSong})
        }
      }, [setSong, id, songs])

    return(
        <div>
            {!!song.id ?
            <div>
                <h1>{song.title}</h1>
                <h3>{`by: ${song.artist}`}</h3>
                <br/>
                <p>{song.lyrics}</p>
                <br/>
                <h3>{`Album: ${song.album}`}</h3>
                <br/>
                <h3>{`Length: ${song.time}`}</h3>
            </div>
            :
            <div>
                Loading Song...
            </div>
            }
        </div>
    )

};

export default SongShow;