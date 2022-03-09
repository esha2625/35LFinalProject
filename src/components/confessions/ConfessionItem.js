import { useContext, useState } from 'react';

import Card from '../ui/Card';
import classes from './ConfessionItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import LikesContext from '../../store/likes-context';

import { getDatabase, ref, runTransaction } from 'firebase/database';

function ConfessionItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const likesCtx = useContext(LikesContext);
  const [likecounter, setlikecounter] = useState(props.likes);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const itemIsLike = likesCtx.itemIsLike(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        likes: props.likes,
        image: props.image,
        address: props.address,
      });
    }
  }

  function toggleLikeStatusHandler() {
    const db = getDatabase();
    const postRef = ref(db, 'confessions/' + props.id);
    if (itemIsLike){
      likesCtx.removeLike(props.id);
      runTransaction(postRef, (post) => {
        if ( post ){
          console.log("decrementing");
          post.likes--;
        }
        return post;
      });
      setlikecounter(props.likes)
    } else {
      likesCtx.addLike({
        id: props.id,
        title: props.title,
        description: props.description,
        likes: props.likes,
        image: props.image,
        address: props.address,
      });
      runTransaction(postRef, (post) => {
        if ( post ){
          console.log("incrementing");
          post.likes++;
          
        }
        return post;
      });
      setlikecounter(props.likes+1)
      

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
                  <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove Favorite' : 'Favorite'}
                  </button>
                  <button onClick={toggleLikeStatusHandler}>
                    {itemIsLike ? 'Unlike' : 'Like'}
                  </button>
                  <div className={classes.count}>
                      Likes: {likecounter}
                  </div>
              </div>
            </Card>
        </li>
    );
}

export default ConfessionItem;