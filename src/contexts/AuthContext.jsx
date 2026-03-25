import { createContext, useContext, useState, useCallback } from "react";
import {
  signinUser,
  validateToken as apiValidateToken,
  setAuthHeader,
} from "../api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = async (credentials) => {
    const response = await signinUser(credentials);

    const userData = response?.data?.user || null;
    const newToken = response?.data?.token || null;

    if (newToken) {
      setToken(newToken);
      setAuthHeader(newToken);
    }

    setUser(userData);
    setIsAuthenticated(true);

    return { user: userData, token: newToken };
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setAuthHeader(null);
  };

  const validateCurrentToken = useCallback(async () => {
    if (!token) {
      return isAuthenticated;
    }

    try {
      const validation = await apiValidateToken(token);
      const validatedUser = validation?.data?.user || null;
      setUser(validatedUser);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
      setAuthHeader(null);
      return false;
    }
  }, [token, isAuthenticated]);

  const value = {
    token,
    user,
    isAuthenticated,
    signIn,
    signOut,
    validateCurrentToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
