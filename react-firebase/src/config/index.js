// import { initializeApp } from "firebase/app";
// import { getAuth } from "@firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET_ID",
//   messagingSenderId: "YOUR_MESSAGE_SENDER_ID",
//   appId: "YOUR_APP_ID",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const storage = getStorage(app);

// export { db, auth, storage };

import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCmJnxEK3J4oKhHR7by6Yg4oHaMK9qoPbE",
  authDomain: "citycards-c1fa9.firebaseapp.com",
  databaseURL: "https://citycards-c1fa9-default-rtdb.firebaseio.com",
  projectId: "citycards-c1fa9",
  storageBucket: "citycards-c1fa9.appspot.com",
  messagingSenderId: "473272267616"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
