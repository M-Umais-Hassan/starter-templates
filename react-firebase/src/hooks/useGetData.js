import { useEffect, useState } from "react";
import { db } from "config";
import { doc, getDoc } from "firebase/firestore";

const useSingle = (queryPath, id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const dataRef = doc(db, queryPath, id);
      const docSnap = await getDoc(dataRef);
      if (docSnap.exists()) setData(docSnap.data());
      setLoading(false);
    };

    getData();
  }, [queryPath, id]);

  return { loading, data };
};

export default useSingle;
