import styled from "@emotion/styled";
import { Routes, Route, Navigate } from "react-router-dom";
import Bottom from "./components/bottom";

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
        <Route path="search" element={<h1> Search </h1>} />
        <Route path="favorites" element={<h1> Favorites </h1>} />
        <Route path="profile" element={<h1> Profile </h1>} />
      </Routes>
      <Bottom />
    </MainWrapper>
  );
};

export default AuthenticatedApp;
