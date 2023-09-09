import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { getLocalStorageData } from "utils/helpers";

const PrivateRoute = ({ Component }) => {
  let { id } = getLocalStorageData("user");

  return id ? Component : <Navigate to="/unauthorized" />;
};

PrivateRoute.propTypes = {
  Component: PropTypes.object
};

export default PrivateRoute;
