import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

function withAuthProtection(WrappedComponent) {
  return function ProtectedRoute(props) {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      if (!auth) {
        navigate('/login');
      }
    }, [auth, navigate]);

    if (!auth) {
      return <div>Loading...</div>; 
    }

    return <WrappedComponent {...props} />;
  }
}

export default withAuthProtection;
