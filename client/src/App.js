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
import FavoritesContainer from './Containers/FavoritesContainer';
import UsersSongsContainer from './Containers/UsersSongsContainer';

function App() {

  const [user, setUser] = useState(null)
  const [songs, setSongs] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if(!!user)fetch("/api/me").then((resp) => {
      if(resp.ok) {
        resp.json().then((user) => setUser(user));
      }
    });
  }, [user]);

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

    useEffect(() => {
        fetch("/api/favorites")
            .then((resp) => resp.json())
            .then(data => setFavorites([...data]))
    }, []);

    const addFavorite = (songId) => {
      let params = {...songId}
      let filteredFavorites = favorites.filter(favorite => params.song_id === favorite.song_id && params.user_id === favorite.user_id)
          if(filteredFavorites.length === 0){
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
          )}
  };

  const handleDelete = async (id) => {
    let favoriteDelete = favorites.filter(favorite => favorite.id !== id)
    setFavorites([...favoriteDelete])
    let resp = await fetch(`/api/favorites/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    })
  };

  const updateSong = (songData) => {
    let params = {...songData}
    let filteredSongs = songs.filter(song => song.id !== songData.id)
    fetch(`/api/songs/${songData.id}`, {
      method: "PATCH",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    })
    .then((resp) => resp.json())
    .then((songData) => 
      setSongs([...filteredSongs, songData])
    )
  };

  if(user) {
    return (
      <div>
        <NavBar onLogout={setUser} user={user} />
        <main>
          <h2 className='welcomer'>Welcome, {user.username}!</h2>
          <br/>
          <Routes>
            <Route exact path="/songs" element={<SongsContainer songs={songs} user={user} favorites={favorites} addFavorite={addFavorite} handleDelete={handleDelete} />}></Route>
            <Route exact path="/songs/:id" element={<SongShow songs={songs} />}></Route>
            <Route exact path="/songs/new" element={<SongForm addNewSong={addNewSong} user={user} />}></Route>
            <Route exact path="/users-songs" element={<UsersSongsContainer user={user} songs={songs} updateSong={updateSong} />}></Route>
            <Route exact path="/favorites" element={<FavoritesContainer favorites={favorites} addFavorite={addFavorite} user={user} handleDelete={handleDelete} />}></Route>
            <Route exact path="/" element={<Home songs={songs} user={user} />}></Route>
          </Routes>
        </main>
      </div>
    );
  } else {
    return (
      <div>
        <NavBar/>
        <h2 className='headers'>Please login or signup to view more!</h2>
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
