import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initFirebaseAuth from "../Pages/Login/Firebase/firebase.init";

initFirebaseAuth()

const useFirebase=()=>{
    const [user,setUser]=useState({});
    
    const[isLoading,setIsLoading]=useState(true);
   
const auth = getAuth();



 const googleSignIn=()=>{
     setIsLoading(true);
const googleProvider = new GoogleAuthProvider();
signInWithPopup(auth,googleProvider)
.then(result=>{
    setUser(result.user)
})
.finally(()=>{
    setIsLoading(false)
})
}  

useEffect(()=>{
const unSubscribed=  onAuthStateChanged(auth,user=>{
if(user){
    setUser(user)
}else{
    setUser({})
}
setIsLoading(false)
  })

  return ()=>unSubscribed;
},[])



 const logOut=()=>{
   setIsLoading(true)  
signOut(auth)
.then(()=>{})
.finally(()=>{
    setIsLoading(false)
})


 }

    return {
        isLoading,
         user,
        googleSignIn,
        logOut
    }
}
export default useFirebase;