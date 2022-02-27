import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './ConfessionItem.module.css';
import LikesContext from '../../store/likes-context';

function ConfessionItem(props) {
  const likesCtx = useContext(LikesContext);

  const itemIsLike = likesCtx.itemIsLike(props.id);

  function toggleLikeStatusHandler() {
    if (itemIsLike){
      likesCtx.removeLike(props.id);
    } else {
      likesCtx.addLike({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }


    return(
        <li className={classes.item}>
            <Card>
            <div className={classes.content}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleLikeStatusHandler}>
                  {itemIsLike ? 'Unlike' : 'Like'}
                </button>
            </div>
            </Card>
        </li>
    );
}

export default ConfessionItem;
