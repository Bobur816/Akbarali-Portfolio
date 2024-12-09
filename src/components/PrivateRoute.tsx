import { useNavigate } from "react-router-dom";
import { ReactNode, useEffect } from "react";
import { useUser } from "../authentication/useUser";
import Spinner from "../UI/Spinner/Spinner";

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}

export default PrivateRoute;
