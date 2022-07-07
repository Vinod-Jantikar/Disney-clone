import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDqG_6W3KnrGXgLcGXs0vBWmYKjk4d-_g8",
    authDomain: "disneyplus-clone-24e1a.firebaseapp.com",
    projectId: "disneyplus-clone-24e1a",
    storageBucket: "disneyplus-clone-24e1a.appspot.com",
    messagingSenderId: "48732622112",
    appId: "1:48732622112:web:41bd0bb18aa8dd1318db45",
    measurementId: "G-B30SET0PLB"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const db = getFirestore(fireBaseApp);
const auth = getAuth(fireBaseApp);

// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(fireBaseApp);
const provider = new GoogleAuthProvider();


export { auth, provider, storage }

export default db