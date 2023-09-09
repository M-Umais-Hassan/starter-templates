import { useState, useEffect } from "react";
import { db } from "config";
import { collection, query, getDocs } from "firebase/firestore";

const useAll = (queryPath) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const dataArr = [];
      const dataRef = collection(db, queryPath);
      const dataQuery = query(dataRef);
      const querySnapshot = await getDocs(dataQuery);
      querySnapshot.forEach((doc) => {
        dataArr.push(doc.data());
      });
      setData(dataArr);
      setLoading(false);
    };

    getData();
  }, [queryPath]);

  return { loading, data };
};

export default useAll;
