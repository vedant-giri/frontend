
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC_nRDMHl7bV4kLcTs2LZosBBwg8OC5WHs",
    authDomain: "collegemanagement-edcca.firebaseapp.com",
    projectId: "collegemanagement-edcca",
    storageBucket: "collegemanagement-edcca.appspot.com",
    messagingSenderId: "83272265462",
    appId: "1:83272265462:web:55da7c6bdb045d921a06d7",
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);