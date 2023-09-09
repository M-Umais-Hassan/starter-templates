import { useLoaderData } from "react-router-dom";

const Listing = () => {
  const data = useLoaderData();

  if (!data) {
    return "Loading!!!";
  }

  return (
    <div>
      <h1>Listing</h1>
      <ul>
        {data?.map((el) => (
          <li key={el?.id}>{el?.city}</li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
