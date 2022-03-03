import React from "react";
import FavoritesCard from "../Components/FavoritesCard";

function FavoritesContainer({ favorites, addFavorite, user }) {

    return(
        <div>
            <h1 className="headers">Favorites</h1>
            {favorites.map(favorite => <FavoritesCard key={favorite.id} favorite={favorite} addFavorite={addFavorite} user={user} /> )}
        </div>
    )

};

export default FavoritesContainer;