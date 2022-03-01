import {useRef} from 'react';
import Card from '../ui/Card';
import classes from './NewConfessionForm.module.css';

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
                <label htmlFor="title">Confession Title</label>
                <input type="text" required id="title" ref={titleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor="description">Confession Content</label>
                <textarea id="description" required rows='10' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <div className="vertical-center">
                    <button>Add Confession</button>
                </div>
            </div>
        </form>
    </Card>
}

export default NewConfessionForm;