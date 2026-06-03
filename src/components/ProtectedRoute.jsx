import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, token, validateCurrentToken, isLoading } = useAuth();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (isAuthenticated) {
        setChecking(false);
        return;
      }
      if (!token) {
        setChecking(false);
        return;
      }

      await validateCurrentToken();
      setChecking(false);
    };

    checkAuth();
  }, [isAuthenticated, token, validateCurrentToken]);

  if (isLoading || checking) return <div>Loading...</div>;
  if (!isAuthenticated)
    return <Navigate to="/signin" state={{ from: location }} replace />;
  return children;
};

export default ProtectedRoute;
