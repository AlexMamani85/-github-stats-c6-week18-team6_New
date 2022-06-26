import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Bottom from "./components/bottom";
import ProfilePage from './pages/profile-page'
import FavoritesPage from './pages/favorites-page'
import SearchUser from "./components/search-states/search-user";
import SearchIdle from "./components/search-states/search-idle";
import SearchPage from "./pages/search-page";
import {  getFavorites} from "./services/favorites-service";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;


const AuthenticatedApp = () => {

const [favorites, setFavorites] = useState(null)

  useEffect(() => {
    getFavorites().then(setFavorites).catch(console.log);
    console.log(favorites)
  }, []);


  return (
    <MainWrapper>
        <Routes>
          <Route path="/" index element={<Navigate to="/search" />} />
          <Route path="search" element={<SearchPage />}>
            <Route index element={<SearchIdle />} />
            <Route path=":username" element={<SearchUser />} />
          </Route>
          <Route path="favorites" element={<FavoritesPage favorites={favorites} />} />
          <Route path="profile"  element={<ProfilePage />} />
        </Routes>
        <Bottom />

    </MainWrapper>
  );
};

export default AuthenticatedApp;
