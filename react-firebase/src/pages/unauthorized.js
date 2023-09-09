import { Link, useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/login");
  }, 3000);

  return (
    <div>
      <h1>You are Unauthorized</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Unauthorized;
