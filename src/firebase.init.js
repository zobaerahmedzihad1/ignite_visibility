import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBU6u25vp4lVtcclZj7d_LRTBDddtw9NTA",
//   authDomain: "ignite-visibility-c6918.firebaseapp.com",
//   projectId: "ignite-visibility-c6918",
//   storageBucket: "ignite-visibility-c6918.appspot.com",
//   messagingSenderId: "48019984713",
//   appId: "1:48019984713:web:0d9cdd9453ec31c42e0a98"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;