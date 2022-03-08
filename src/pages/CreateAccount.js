import React from 'react';
import NewAccountForm from "../components/confessions/createAccount";
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push, onValue, child, get} from "firebase/database";
import {useRef} from 'react';
import { useEffect, useState } from "react";
import {useAuth} from '../store/auth-context';
import {Button, Alert} from 'react-bootstrap';
import './style.css';

function CreateAccountPage() {
    const navigate = useNavigate();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    const {signup } = useAuth();
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
            await signup(enteredTitle, enteredDescription); 
            navigate('/')
        }catch {
            setError("Failed to create an account.")
        }
        setLoading(false)
/*
        const db = getDatabase();
        const dbRef = ref(getDatabase());
        
        get(
      child(dbRef, 'users/')
        )
      .then(response => {
        
        return response.val();
      }).then(responseData => {
        for (const key of Object.entries(responseData)) {
            
            if(key[1].username == enteredTitle){
                
                navigate("/", {replace:true});
                i =0;
                return;
                
            }
            
            
        }
        
        if(i != 0){
            const postListRef = ref(db, 'users');
            const newPostRef = push(postListRef);
            set(newPostRef, {
            username: enteredTitle,
            password: enteredDescription

            });
            }
      })
    */        
    }
    
    
    return <section>
        <div className="HomePage">
            <div className = "typewriter">
                <div>
                    <h1>Ready to Confess?</h1>
                </div>
            </div>
            
            <h2>Create an Account:</h2> 
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
              Sign Up
            </Button>
                   {/*} <input type="submit" value="Submit"/>*/}
                </form> 
                {/*<Form>
                    <Form.Group id = "email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required/>
                    </Form.Group>
                    <Form.Group id= "password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required/>
                    </Form.Group>
                    <Button classname="w-100" type = "submit">
                    Sign Up
                    </Button>
</Form> */}
    <div className = "w 100 text-center mt-2">
        Already have an account? <a href = "/login-page">Log In</a>
    </div>
            </div>
            </div>
    </section>
}

export default CreateAccountPage;
