/* eslint-disable react/react-in-jsx-scope */
import Listing from "components/home/listing";
import { getAllData } from "services/getData";

export async function loader() {
  return await getAllData("cities");
}

const Home = () => {
  return <Listing />;
};

export default Home;
