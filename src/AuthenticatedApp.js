import styled from "@emotion/styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Bottom from "./components/bottom";
import ProfilePage from './pages/profile-page'
import SearchUser from "./components/search-states/search-user";
import SearchIdle from "./components/search-states/search-idle";
import SearchPage from "./pages/search-page";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const AuthenticatedApp = () => {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" index element={<Navigate to="/search" />} />
        <Route path="search" element={<SearchPage />}>
          <Route index element={<SearchIdle />} />
          <Route path=":username" element={<SearchUser />} />
        </Route>
        <Route path="favorites" element={<h1> Favorites </h1>} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
      <Bottom />
    </MainWrapper>
  );
};

export default AuthenticatedApp;
