import { createContext, useContext, useEffect, useState } from "react";
// import { tokenKey } from "../config";
import * as auth from "../services/auth-service";

import { getFavorites } from "../services/favorites-service";
const FavContext = createContext();

const FavoritesProvider = ({ children }) => {

  function getFavoritesFromContext() {
    return getFavorites();
  }

  return (
    <FavContext.Provider
      value={{
        getFavoritesFromContext,
      }}
    >
      {children}
    </FavContext.Provider>
  );
};

function useFavoriteContext() {
  return useContext(FavContext);
}

export { FavoritesProvider, useFavoriteContext };
