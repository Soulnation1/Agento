import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        setAuthHeader(storedToken);
        try {
          const validation = await apiValidateToken(storedToken);
          setUser(validation?.data?.user || null);
          setIsAuthenticated(true);
        } catch {
          setToken(null);
          setUser(null);
          setIsAuthenticated(false);
          setAuthHeader(null);
          localStorage.removeItem("token");
        }
      }
      setIsLoading(false);
    };
    initAuth();
  }, []);

  const signIn = async (credentials) => {
    const response = await signinUser(credentials);
    const responseData = response?.data || {};
    const payload = responseData?.data || responseData;
    const newToken =
      payload?.token ||
      payload?.accessToken ||
      payload?.access_token ||
      response?.headers?.authorization ||
      response?.headers?.Authorization ||
      response?.headers?.["x-access-token"] ||
      response?.headers?.["x-auth-token"];
    const userData = payload?.user || payload?.profile || responseData?.user;

    if (!newToken) {
      throw new Error("Authentication token missing from login response");
    }

    const tokenValue = newToken.replace(/^Bearer\s+/i, "");
    setToken(tokenValue);
    setAuthHeader(tokenValue);
    localStorage.setItem("token", tokenValue);
    setUser(userData);
    setIsAuthenticated(true);
    return { user: userData, token: tokenValue };
  };

  const signOut = () => {
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setAuthHeader(null);
    localStorage.removeItem("token");
  };

  const validateCurrentToken = useCallback(async () => {
    if (!token) return false;
    try {
      const validation = await apiValidateToken(token);
      setUser(validation?.data?.user || null);
      setIsAuthenticated(true);
      return true;
    } catch {
      setToken(null);
      setUser(null);
      setIsAuthenticated(false);
      setAuthHeader(null);
      localStorage.removeItem("token");
      return false;
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isAuthenticated,
        isLoading,
        signIn,
        signOut,
        validateCurrentToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
