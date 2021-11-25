import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (favorite) => setFavorites([...favorites, favorite]);

  const removeFavorite = (id) =>
    setFavorites(favorites.filter((favorite) => favorite.id !== id));

  const isFavorite = (id) => favorites.some((favorite) => favorite.id === id);

  const context = {
    favorites,
    totalFavorites: favorites.length,
    addFavorite,
    removeFavorite,
    isFavorite,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
