import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './createAccount.module.css';
import '../../pages/style.css'

function NewAccountForm(props){
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const confessionData = {
            login: enteredTitle,
            password: enteredDescription,
        };
        console.log(confessionData);

        props.onAddConfession(confessionData);
    }
    return (
        <div className="login-form">
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Username</label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>
                <div className={classes.control}>
                    <label htmlFor="description">Password</label>
                    <input type="text" required id="description" ref={descriptionInputRef}/>
                </div>
                <div className={classes.actions}>
                    <button>Create Account</button>
                </div>
            </form>

            
        </div>
    )
}

export default NewAccountForm;