import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function UsersSongsCard({ song, user, updateSong }) {

    const [edit, setEdit] = useState(false);
    const [formData, setFormData] = useState({
        id: song.id,
        title: "",
        lyrics: "",
        artist: "",
        time: "",
        album: "",
        user_id: user.id
    });

    const handleEdit = () => {
        setEdit(true)
    };

    const handleChange = (event) => {
        setFormData((prev) => {
            return {...prev, [event.target.id]: event.target.value}
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        updateSong(formData)
        setFormData({
            id: song.id,
            title: "",
            lyrics: "",
            artist: "",
            time: "",
            album: "",
            user_id: user.id
        })
        setEdit(false)
    };

    if(edit){
        return(
            <div className="form">
                <div className="heading">
                    <h1 className="login-header">Edit Your Song Here!</h1>
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
                        <button className="float" type="submit">Update</button>
                    </form>
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <div className="cards">
                    <div className="inner-card">
                        <h2 className="labels">Title:</h2>
                        <NavLink to={`/songs/${song.id}`} className="nav"><p className="song-links">{song.title}</p></NavLink>
                        <br/>
                        <h3 className="labels">Artist:</h3>
                        <p className="data">{song.artist}</p>
                        <br/>
                        <h3 className="labels">Album:</h3>
                        <p className="data">{song.album}</p>
                        <br/>
                        <button onClick={handleEdit} className="buttons">Edit</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default UsersSongsCard;