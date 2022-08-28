// Firebase を初期化し、使用するプロダクトの SDK の利用を開始します。
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw5YhcOEdgqgAM_VF_fjlhPQT_f-yuZwU",
  authDomain: "twitter-clone-udemy-360d5.firebaseapp.com",
  projectId: "twitter-clone-udemy-360d5",
  storageBucket: "twitter-clone-udemy-360d5.appspot.com",
  messagingSenderId: "94981942742",
  appId: "1:94981942742:web:13c97360557ed0c80c8877",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
