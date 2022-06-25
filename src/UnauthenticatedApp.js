import LoginPage from "./pages/login-page";
import SingupPage from "./pages/signup-page";
import { useState } from "react";
import { StyledHeading, GlobalFormat, StyledButton } from "./styles/login";


const UnauthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <GlobalFormat>
      <div>
        <StyledHeading>Welcome to Github Stats</StyledHeading>
        {showLogin ? <LoginPage /> : <SingupPage />}
        <StyledButton onClick={handleLogin}>
          {showLogin ? "Create account" : "Login"}
        </StyledButton>
      </div>
    </GlobalFormat>
  );
};

export default UnauthenticatedApp;
