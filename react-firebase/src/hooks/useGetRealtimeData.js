import { useEffect, useState } from "react";
import { db } from "config";
import { collection, query, onSnapshot } from "firebase/firestore";

const useRealtime = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const dataRef = collection(db, path);
      const dataQuery = query(dataRef);
      const unsubscribe = onSnapshot(dataQuery, (querySnapshot) => {
        setData([]);
        querySnapshot.forEach((doc) => {
          setData((prev) => [...prev, doc.data()]);
        });
        setLoading(false);
      });
      return unsubscribe;
    };
    getData();
  }, [path]);

  return { data, loading };
};

export default useRealtime;
