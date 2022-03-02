import { useContext } from 'react';

import Card from '../ui/Card';
import classes from './ConfessionItem.module.css';
import FavoritesContext from '../../store/favorites-context';

function ConfessionItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite){
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
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
                  <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Remove Favorite' : 'Favorite'}
                  </button>
                  <button onClick={toggleFavoriteStatusHandler}>
                    {itemIsFavorite ? 'Unlike' : 'Like'}
                  </button>
                  <div className={classes.count}>
                      Likes: 0
                  </div>
              </div>
            </Card>
        </li>
    );
}

export default ConfessionItem;
