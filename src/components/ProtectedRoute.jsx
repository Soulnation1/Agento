import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, validateCurrentToken } = useAuth();
  const [loading, setLoading] = useState(true);
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated) {
        setAllowed(false);
        setLoading(false);
        return;
      }

      const valid = await validateCurrentToken();
      setAllowed(valid);
      setLoading(false);
    };

    checkAuth();
  }, [isAuthenticated, validateCurrentToken]);

  if (loading) {
    return <div>Loading ...</div>;
  }

  if (!allowed) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
