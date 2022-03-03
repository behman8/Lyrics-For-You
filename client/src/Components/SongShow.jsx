import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SongShow({ songs }) {
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
                <div className="headers">
                    <h2>{song.title}</h2>
                    <p>{`by: ${song.artist}`}</p>
                </div>
                <div className="song-show">
                    <div className="lyrics">
                        <p>{song.lyrics.join(", ")}</p>
                    </div>
                </div>
                <div className="headers">
                    <p>{`Album: ${song.album}`}</p>
                </div>
                <div className="headers">
                    <p>{`Length: ${song.time}`}</p>
                </div>
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