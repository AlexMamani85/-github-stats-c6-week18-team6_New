import LoginPage from "./pages/login-page";
import SingupPage from "./pages/signup-page";
import { useState } from "react";
import { StyledHeading, GlobalFormat } from "./styles/login";


const UnauthenticatedApp = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLogin(!showLogin);
  };

  return (
    <GlobalFormat>
      <div className="wrapper">
        <StyledHeading>Welcome to Github Stats</StyledHeading>
        {showLogin ? <LoginPage /> : <SingupPage />}
        <div className="text-center mt-2">
          <button className="btn font-blue" onClick={handleLogin}>
            {showLogin ? "Create account" : "Login"}
          </button>
        </div>
      </div>
    </GlobalFormat>
  );
};

export default UnauthenticatedApp;
