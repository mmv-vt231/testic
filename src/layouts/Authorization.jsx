import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

function Authorization() {
  const { isAuthorized } = useSelector(state => state.auth);

  if (!isAuthorized) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return <Outlet />;
}

export default Authorization;
