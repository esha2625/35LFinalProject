import { useContext } from 'react';
import { useState } from 'react';

import Card from '../ui/Card';
import classes from './ConfessionItem.module.css';
import FavoritesContext from '../../store/favorites-context';
import LikesContext from '../../store/likes-context';

import { getDatabase, ref, remove, set, runTransaction } from 'firebase/database';
import { getAuth } from "firebase/auth";


function ConfessionItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const likesCtx = useContext(LikesContext);
  const [likesCounter, setLikesCounter] = useState(props.likes);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);
  const itemIsLike = likesCtx.itemIsLike(props.id);

  const auth = getAuth();
  const user = auth.currentUser;

  var uid = null;
  if (user) {
    uid = user.uid;
  }

  function toggleFavoriteStatusHandler() {
    const db = getDatabase();
    
    if (itemIsFavorite){
      remove(ref(db, 'users/' + uid + "/favorites/" + props.id));
      favoritesCtx.removeFavorite(props.id);
    } else {
      set(ref(db, 'users/' + uid + "/favorites/" + props.id), props);
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
      remove(ref(db, 'users/' + uid + "/likes/" + props.id));
      likesCtx.removeLike(props.id);
      runTransaction(postRef, (post) => {
        if ( post ){
          console.log("decrementing");
          post.likes--;
        }
        return post;
      });
      setLikesCounter(props.likes);
    } else {
      set(ref(db, 'users/' + uid + "/likes/" + props.id), props);
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
      setLikesCounter(props.likes+1);
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
                      Likes: {likesCounter}
                  </div>
              </div>
            </Card>
        </li>
    );
}

export default ConfessionItem;