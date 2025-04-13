import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyASRsID1iEF7JkKtEyAJSL_fqinMPWtR8o",
    authDomain: "netflixgpt-9345c.firebaseapp.com",
    projectId: "netflixgpt-9345c",
    storageBucket: "netflixgpt-9345c.firebasestorage.app",
    messagingSenderId: "489936866251",
    appId: "1:489936866251:web:5d8f66b44248752b61c44e"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
