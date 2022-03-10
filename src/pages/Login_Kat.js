import React from 'react';
import NewAccountForm from "../components/confessions/createAccount";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect, useState } from "react";
import { useAuth } from '../store/auth-context';
import { Button, Alert } from 'react-bootstrap';

import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import './style.css';

const login_header = <h2>Login:</h2>

function LoginPage() {
    const [failedSignIn, setFailedSignIn] = useState(false);

    const navigate = useNavigate();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const provider = new GoogleAuthProvider();
    var account_error = "";
    if (useState == "invalid_email") {
        account_error = "ERROR: Must Use @ucla.edu Email Address to Sign In"
    } else {
        account_error = "";
    }

    const auth = getAuth();
    function signIn() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                if (!user.email.toLowerCase().endsWith("ucla.edu")){
                    signOut(auth);
                    console.log("invalid sign in");
                    setFailedSignIn(true);
                    return;
                // TODO: Display something saying that only ucla.edu domains are valid
                // ------------------------------
                }
                setFailedSignIn(false);

                navigate('/');
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

            });
    }

    /*
     async function submitHandler(event) {
         event.preventDefault();
         var i = 1;
 
         const enteredTitle = titleInputRef.current.value;
         const enteredDescription = descriptionInputRef.current.value;
 
         try{
             setError('')
             setLoading(true)
             await login(enteredTitle, enteredDescription); 
             navigate('/')
         }catch {
             setError("Failed to log in.")
         }
         setLoading(false)
       }*/

    return <section>
        <div className="HomePage">
            <div className="typewriter">
                <div>
                    <h1>Welcome, Bruin</h1>
                </div>
            </div>

            <h2>Sign In and Start Confessing</h2>
            <div className="vertical-center">
                <div className="button-login">
                    <h3>{failedSignIn ? "Must use login with UCLA account" : ""} </h3>
                    <button onClick={signIn}>
                        Log In
                    </button>
                    
                </div>
            </div>

        </div>
    </section>
}

export default LoginPage;
