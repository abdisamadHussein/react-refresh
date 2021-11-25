import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-contex";
import MeatupList from "../components/MeetupList";

function Favorites() {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>My favorites</h1>
      {totalFavorites === 0 ? (
        <p>No favorites yet. start adding some?</p>
      ) : (
        <MeatupList meetups={favorites} />
      )}
    </section>
  );
}

export default Favorites;
