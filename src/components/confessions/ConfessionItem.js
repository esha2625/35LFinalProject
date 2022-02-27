import classes from './ConfessionItem.module.css'
import Card from '../ui/Card';

function ConfessionItem(props) {
    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button>Like</button>
            </div>
            </Card>
        </li>
    );
}

export default ConfessionItem;