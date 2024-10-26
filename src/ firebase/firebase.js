
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXFcFbJyA97dnYxuHDFINWCDGIrKZLC0o",
  authDomain: "netflix-clone-c5f55.firebaseapp.com",
  projectId: "netflix-clone-c5f55",
  storageBucket: "netflix-clone-c5f55.appspot.com",
  messagingSenderId: "992874385472",
  appId: "1:992874385472:web:5b58cd4162bf84f7f70fa5",
  measurementId: "G-JQZXLVCHQB"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);