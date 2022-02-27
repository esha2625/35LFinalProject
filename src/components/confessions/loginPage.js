import {useRef} from 'react';
import {Link} from 'react-router-dom';
import Card from '../ui/Card';
import classes from './loginPage.module.css';

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
                <label htmlFor="title">If you have an account with us, login here. Otherwise create an account!</label>
            </div>
            <div className={classes.control}>
                <label htmlFor="title">Username</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Password</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.actions}>
            <button>Submit</button>
            </div>
        </form>
        <div className={classes.actions}>
            <button onclick = "linkToCreateAccountPage()">Create Account</button>
        </div>
    </Card>
}

function linkToCreateAccountPage(){
    <Link to = '/create-account'></Link>
}

export default NewConfessionForm;