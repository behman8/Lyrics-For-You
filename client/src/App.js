import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import NavBar from './Containers/NavBar';
import SongsContainer from './Containers/SongsContainer';
import SongShow from './Components/SongShow';
import Login from './Components/Login';
import Home from './Components/Home';
import Signup from './Components/Signup';
import SongForm from './Components/SongForm';

function App() {

  const [user, setUser] = useState(null)
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("/api/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/api/songs")
      .then((resp) => resp.json())
      .then(data => setSongs([...data]));
  }, []);

  const addNewSong = (songData) => {
    let params = {...songData}
    fetch("/api/songs", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then((resp) => resp.json())
    .then(songData => {
      setSongs(prev => {
          return [...prev, songData]
      })
    })
  }

  if(user) {
    return (
      <div>
        <NavBar onLogout={setUser} user={user} />
        <main>
          <h2>Welcome, {user.username}!</h2>
          <br/>
          <Routes>
            <Route exact path="/songs" element={<SongsContainer songs={songs} />}></Route>
            <Route exact path="api/songs/:id" element={<SongShow songs={songs} />}></Route>
            <Route exact path="/songs/new" element={<SongForm addNewSong={addNewSong} user={user} />}></Route>
            <Route exact path="/" element={<Home songs={songs} user={user} />}></Route>
          </Routes>
        </main>
      </div>
  );
  } else {
    return (
      <div>
        <NavBar/>
        <h2>Please login or signup to view more!</h2>
        <main>
          <Routes>
            <Route exact path="/login" element={<Login onLogin={setUser} />}></Route>
            <Route exact path="/signup" element={<Signup onLogin={setUser} />}></Route>
            <Route exact path="/" element={<Home songs={songs} />}></Route>
          </Routes>
        </main>
      </div>
    )
  }
}

export default App;
