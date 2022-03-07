import React from "react";
import FavoritesCard from "../Components/FavoritesCard";

function FavoritesContainer({ favorites, addFavorite, user, handleDelete }) {

    return(
        <div>
            <h1 className="headers">Favorites</h1>
            {favorites.map(favorite => user.id === favorite.user_id ? <FavoritesCard key={favorite.id} favorite={favorite} addFavorite={addFavorite} user={user} handleDelete={handleDelete} /> : null)}
        </div>
    )

};

export default FavoritesContainer;