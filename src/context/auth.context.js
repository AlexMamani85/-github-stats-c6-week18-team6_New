import { createContext, useContext, useEffect, useState } from "react";
// import { tokenKey } from "../config";
import * as auth from "../services/auth-service";
import { createUser, getUser } from "../services/user-service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.log);
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch(console.log);
  }

  function signup(credentials) {
    createUser(credentials).then(setUser).catch(console.log);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        signup,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
