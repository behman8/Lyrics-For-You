import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SongForm({ addNewSong, user}) {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        title: "",
        lyrics: "",
        artist: "",
        time: "",
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
        <div className="form">
            <div className="heading">
                <h1 className="login-header">Add Your Song Here!</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            id="title"
                            type="text"
                            value={formData["title"]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Title"
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            id="lyrics"
                            type="text-area"
                            value={formData["lyrics"]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Lyrics"
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            id="artist"
                            type="text"
                            value={formData["artist"]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Artist"
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            id="time"
                            type="number"
                            value={formData["time"]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Length in Seconds"
                        />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input
                            id="album"
                            type="text"
                            value={formData["album"]}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="Album"
                        />
                    </div>
                    <button className="float" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )

};

export default SongForm;