import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoutes = ({ children, redirectPath }) => {
  const { isLoggedin } = useContext(AuthContext);

  if (!isLoggedin)
    return (
      <Navigate to={redirectPath} replace>
        {children}
      </Navigate>
    );

  return children ? children : <Outlet />;
};

export default PrivateRoutes;
