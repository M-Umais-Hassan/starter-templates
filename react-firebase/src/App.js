import { useEffect } from "react";
import Routes from "./routes";
import { getLocalStorageData } from "utils/helpers";
import { useDispatch } from "react-redux";
import { setUser } from "redux/auth";
import { signOut } from "firebase/auth";
import { auth } from "config";

function App() {
  const { id, email } = getLocalStorageData("user");
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setUser({ id, email }));
    } else {
      signOut(auth);
    }
  }, [id]);

  return <Routes />;
}

export default App;
