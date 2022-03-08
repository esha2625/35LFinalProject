import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import ConfessionList from '../components/confessions/ConfessionList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p><br></br>Start favoriting some confessions!</p>
  } else {
    content = <ConfessionList confessions={favoritesCtx.favorites} />
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}


export default FavoritesPage;
