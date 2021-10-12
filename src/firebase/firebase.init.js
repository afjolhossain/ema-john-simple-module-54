import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.confige";



   const firebaseAuthentication = () =>{
    initializeApp(firebaseConfig);
   }
   export default firebaseAuthentication;