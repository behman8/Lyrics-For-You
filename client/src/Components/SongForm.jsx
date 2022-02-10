import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SongForm({ addNewSong, user}) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        lyrics: "",
        artist: "",
        time: 0,
        album: "",
        user_id: user.id
    });

    const handleChange = (event) => {
        setFormData((prev) => {
            return {...prev, [event.target.id]: event.target.value}
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        addNewSong(formData)
        setFormData({
            title: "",
            lyrics: "",
            artist: "",
            time: "",
            album: "",
            user_id: user.id
        })
    };

    return(
        <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Your Own Song and Lyrics Here!</h1>
                <h3>Title:</h3>
                    <input
                        id="title"
                        type="text"
                        value={formData["title"]}
                        onChange={handleChange} 
                    />
                    <br/>
                <h3>Lyrics:</h3>
                    <input
                        id="lyrics"
                        type="text-area"
                        value={formData["lyrics"]}
                        onChange={handleChange} 
                    />
                    <br/>
                <h3>Artist:</h3>
                    <input
                        id="artist"
                        type="text"
                        value={formData["artist"]}
                        onChange={handleChange} 
                    />
                    <br/>
                <h3>Time:</h3>
                    <input
                        id="time"
                        type="number"
                        value={formData["time"]}
                        onChange={handleChange} 
                    />
                    <br/>
                <h3>Album:</h3>
                    <input
                        id="album"
                        type="text"
                        value={formData["album"]}
                        onChange={handleChange} 
                    />
                    <br/>
                    <button id="submit-button" type="submit">Submit</button>
            </form>
        </div>
    )

};

export default SongForm;