import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, auth } from "config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { uploadFile } from "./helpers";

/**
 * create a user in firebase, upload user file and add data to firestore
 * @param {String} name
 * @param {String} email
 * @param {String} password
 * @param {Object} file
 */
const register = async (name, email, password, file) => {
  // TODO: This function is just for a structure purpose not proper tested so make sure to test it before using
  await createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
    let profileImg = undefined;
    if (file) profileImg = await uploadFile("userProfileImages", file);
    const userRef = doc(db, "users", userCredential?.user?.uid);
    await setDoc(userRef, {
      uid: userCredential?.user?.uid,
      email,
      name,
      ...(profileImg && { profileImg }),
      createdAt: serverTimestamp()
    });
  });
};

export { register };
