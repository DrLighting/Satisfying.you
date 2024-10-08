
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  
  //colocar a config do firebase aki
};


const app = initializeApp(firebaseConfig);

const auth_mod = getAuth(app);

export {auth_mod}