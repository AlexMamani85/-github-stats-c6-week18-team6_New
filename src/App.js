import UnauthenticatedApp from "./UnauthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp";
import { useEffect, useState } from "react";
import { useAuth } from "./context/auth.context";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
    }
  }, [user]);

  return isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />;
}

export default App;
