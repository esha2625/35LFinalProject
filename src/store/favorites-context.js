import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteConfession) => {},
  removeFavorite: (confessionId) => {},
  itemIsFavorite: (confessionId) => {}
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteConfession) {
    setUserFavorites((prevuserFavorites) => {
      return prevuserFavorites.concat(favoriteConfession);
    });
  }

  function removeFavoriteHandler(confessionId) {
    setUserFavorites(prevuserFavorites => {
      return prevuserFavorites.filter(confession => confession.id != confessionId);
    });
  }

  function itemIsFavoriteHandler(confessionId) {
    return userFavorites.some(confession => confession.id === confessionId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };


  return <FavoritesContext.Provider value={context}>
    {props.children}
  </FavoritesContext.Provider>
}

export default FavoritesContext;
