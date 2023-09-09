import { db } from "config";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";

/**
 * Will take a collection path and id, return a sindle data object
 * @param {String} queryPath
 * @param {String} id
 * @returns Data Object
 */
export const getData = async (queryPath, id) => {
  const dataRef = doc(db, queryPath, id);
  const docSnap = await getDoc(dataRef);
  if (docSnap.exists()) return docSnap.data();
};

/**
 * will take a collection path as string and return data
 * @param {String} queryPath
 * @returns Array of data
 */
export const getAllData = async (queryPath) => {
  const dataArr = [];
  const dataRef = collection(db, queryPath);
  const dataQuery = query(dataRef);
  const querySnapshot = await getDocs(dataQuery);
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });
  return dataArr;
};
