import { useState } from 'react';

import Card from '../ui/Card';
import classes from './ConfessionItem.module.css';

import { getDatabase, get, child, ref, remove, set, runTransaction } from 'firebase/database';
import { getAuth } from "firebase/auth";


function ConfessionItem(props) {
  const [likesCounter, setLikesCounter] = useState(props.likes);
  const [itemIsFavorite, setItemIsFavorite] = useState(false);
  const [itemIsLike, setItemIsLike] = useState(false);

  const db = getDatabase();
  const auth = getAuth();
  const user = auth.currentUser;

  var uid = null;
  if (user) {
    uid = user.uid;
  }
  const dbRef = ref(getDatabase());
  get(child(dbRef, 'users/' + uid + "/favorites/" + props.id)).then((snapshot) => {
    if (snapshot.exists()) {
      setItemIsFavorite(true);
    } else {
      setItemIsFavorite(false);
    }
  });

  get(child(dbRef, 'users/' + uid + "/likes/" + props.id)).then((snapshot) => {
    if (snapshot.exists()) {
      setItemIsLike(true);
    } else {
      setItemIsLike(false);
    }
  });

  function toggleFavoriteStatusHandler() {
    if (uid === null) {
      return;
    }

    if (itemIsFavorite) {
      remove(ref(db, 'users/' + uid + "/favorites/" + props.id));
      setItemIsFavorite(false);
    } else {
      set(ref(db, 'users/' + uid + "/favorites/" + props.id), props);
      setItemIsFavorite(true);
    }
  }

  function toggleLikeStatusHandler() {
    if (uid === null) {
      return;
    }
    const db = getDatabase();
    const postRef = ref(db, 'confessions/' + props.id);
    if (itemIsLike) {
      remove(ref(db, 'users/' + uid + "/likes/" + props.id));
      setItemIsLike(false);
      runTransaction(postRef, (post) => {
        if (post) {
          console.log("decrementing");
          post.likes--;
        }
        return post;
      });
      setLikesCounter(likesCounter - 1);
    } else {
      set(ref(db, 'users/' + uid + "/likes/" + props.id), props);
      setItemIsLike(true);
      runTransaction(postRef, (post) => {
        if (post) {
          console.log("incrementing");
          post.likes++;
        }
        return post;
      });
      setLikesCounter(likesCounter + 1);
    }
  }
  return (
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