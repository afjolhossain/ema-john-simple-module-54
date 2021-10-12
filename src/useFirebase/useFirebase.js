import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged ,signOut} from "firebase/auth";
import firebaseAuthentication from "../firebase/firebase.init";

firebaseAuthentication();


const  useFirebase =()=>{
    const [user,setuser] = useState({});

    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)

        })
    }
    const logOut = () =>{
        signOut(auth).then(()=>{
                  setuser({});
        })
    }
    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
           setuser(user)

            }
          });
    })
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase; 