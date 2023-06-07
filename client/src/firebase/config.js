import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: "AIzaSyD3ZfuAHjUm2nPlhZk3isiCiwdMxd18rrw",
    authDomain: "storage-user.firebaseapp.com",
    projectId: "storage-user",
    storageBucket: "storage-user.appspot.com",
    messagingSenderId: "213906889488",
    appId: "1:213906889488:web:6115aaf871089b4b55a395"
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(FirebaseApp);