import { getAuth, signInWithEmailAndPassword, signOut,  createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


export const signIn = async (email: string, password: string) => {
    const auth = getAuth();

    try{
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error){
        throw new Error(error instanceof Error ? error.message : 'An unknown error occurred');
    }
}

export const logOut = async () => {
    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
 console.log({Error: error})
});
}

export const signUp = async (email: string, password: string) => {
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

////GOOGLE

export const singInWithGoogle = async () => {
  const auth = getAuth();
  const provider = await new GoogleAuthProvider();
  return signInWithPopup(auth, provider)
}