import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBmSW_govG8Nc_wDqFg3es1CnO_u6zic_8",
    authDomain: "fasttravel-3fcbf.firebaseapp.com",
    projectId: "fasttravel-3fcbf",
    storageBucket: "fasttravel-3fcbf.appspot.com",
    messagingSenderId: "1046406475194",
    appId: "1:1046406475194:web:f2b24b990133c117d70183"
  };

  const app = initializeApp(firebaseConfig);

  export const database = getFirestore(app);