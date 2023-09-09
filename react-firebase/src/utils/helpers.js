import { redirect } from "react-router-dom";

/**
 * Return a user friendly message based on firebase error code
 * @param {String} code
 * @returns Error string
 */
export const displayError = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "User Not Found";

    default:
      return "Something went wrong";
  }
};

/**
 * Stores data to local storage
 * @param {String} key
 * @param {Object} value
 */
export const setLocalStorageData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get data from local storage
 * @param {String} key
 * @returns Object
 */
export const getLocalStorageData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

/**
 * Returns path to redirect based on user login status
 * @returns path
 */
export const isAuthenticated = async () => {
  const { id } = getLocalStorageData("user");
  if (id) throw redirect("/");
  return null;
};
