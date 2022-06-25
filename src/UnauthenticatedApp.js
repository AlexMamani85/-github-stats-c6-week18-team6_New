import styled from "@emotion/styled";
import LoginPage from "./pages/login-page";
import SingupPage from "./pages/signup-page";
import { useState } from "react";
import { colors } from "./styles/colors";
import { typography } from "./styles/typography";

const PageTitle = styled.h1`
  color: ${colors.black};
  font-size: ${typography.head.md};
  line-height: ${typography.head.md};
  text-align: center;
  font-weight: 400;
`;
const CustomLink = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.black};
  &:hover {
    color: ${colors.gray.medium};
  }
`;

const UnauthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <PageTitle>Welcome to Github Stats</PageTitle>
      {showLogin ? <LoginPage /> : <SingupPage />}
      <CustomLink onClick={handleLogin}>
        {showLogin ? "Create account" : "Login"}
      </CustomLink>
    </div>
  );
};

export default UnauthenticatedApp;
