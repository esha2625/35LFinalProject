import NewAccountForm from "../components/confessions/createAccount";
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";
import './style.css';

function CreateAccountPage() {
    const navigate = useNavigate();
    var i =1 ;
    function postrequest(confessionData){
    fetch(
        'https://bruinfessions-e55f6-default-rtdb.firebaseio.com/login.json',
                            {
                                method: 'POST',
                                body: JSON.stringify(confessionData),
                                headers: {
                                    'Content-Type' : 'application/json'
                                }
                            }
                        ).then(() => {
                            navigate("/", {replace:true});
                        });
                    }
                
    

     function addConfessionHandler(confessionData) {
        
        fetch(
            'https://bruinfessions-e55f6-default-rtdb.firebaseio.com/login.json'
            
        )
        .then(response => {return response.json();})
        .then(responseData => {
            for (const key of Object.entries(responseData)) {
                console.log(key[1].login);
                
                if(key[1].login == confessionData.login){
                    console.log(key[1].login);
                    navigate("/", {replace:true});
                    i =0;
                    return;
                    
                }
                
            }
            if(i != 0){
                postrequest(confessionData);
            }
            
            
        });
        
        
        
                        
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
                <form>
                    <label>
                        Username:
                        <input type="text" name="Username"/>
                    </label>
                    <label>
                        Password:
                    </label>
                        <input type="password" name="Password"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
            </div>
    </section>
}

export default CreateAccountPage;
