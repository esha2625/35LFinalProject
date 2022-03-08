import React from 'react';
import NewAccountForm from "../components/confessions/createAccount";
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push, onValue, child, get} from "firebase/database";
import {useRef} from 'react';
import { useEffect, useState } from "react";
import {useAuth} from '../store/auth-context';
import {Button, Alert} from 'react-bootstrap';
import './style.css';

const login_header = <h2>Login:</h2>

function LoginPage() {
    const navigate = useNavigate();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const {login } = useAuth();
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
   
   
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
      }

    return <section>
        <div className="HomePage">
            <div className = "typewriter">
                <div>
                    <h1>Welcome, Bruin</h1>
                </div>
            </div>
            
            <h2>Sign In and Start Confessing:</h2> 
            <div className="login-form">
                 <form onSubmit={submitHandler}> 
                 {error && <Alert variant = "danger">{error}</Alert>} 
                    <label>
                        Username:
                        <input type="text" name="Username" required id="title" ref={titleInputRef}/>
                    </label>
                    <label>
                        Password:
                    </label>
                        <input type="password" name="Password" required id="description" ref={descriptionInputRef}/>
            <Button disabled={loading} className="w-100" type="submit">
              Log In
            </Button>
                   {/*} <input type="submit" value="Submit"/>*/}
                </form> 
    <div className = "w 100 text-center mt-2">
        Need an account? Go create one!
    </div>
            </div>
            </div>
    </section>
}

export default LoginPage;
