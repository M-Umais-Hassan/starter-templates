import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 3000);

  return (
    <div>
      <h1>404 Page Not Found</h1>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default PageNotFound;
