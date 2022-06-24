import { createContext, useContext, useState } from "react";
// import { tokenKey } from "../config";
import * as auth from "./auth-service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
