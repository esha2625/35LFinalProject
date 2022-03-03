import NewAccountForm from "../components/confessions/createAccount";
import {useNavigate} from 'react-router-dom';
import { getDatabase, ref, set, push, onValue, child, get} from "firebase/database";
import {useRef} from 'react';
import { useEffect, useState } from "react";
import './style.css';

function CreateAccountPage() {
    const navigate = useNavigate();
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
   
   
    function submitHandler(event) {
        event.preventDefault();
        var i = 1;

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
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
                    <label>
                        Username:
                        <input type="text" name="Username" required id="title" ref={titleInputRef}/>
                    </label>
                    <label>
                        Password:
                    </label>
                        <input type="password" name="Password" required id="description" ref={descriptionInputRef}/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            </div>
    </section>
}

export default CreateAccountPage;
