import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './createAccount.module.css';

function NewConfessionForm(props){
    const titleInputRef = useRef();
    const descriptionInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const confessionData = {
            title: enteredTitle,
            description: enteredDescription,
        };

        props.onAddConfession(confessionData);
    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="title">Username</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Password</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.actions}>
            <button>Create Account</button>
            </div>
        </form>
    </Card>
}

export default NewConfessionForm;