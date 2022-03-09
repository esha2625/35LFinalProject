import { useContext, useState, useEffect } from 'react';


import FavoritesContext from '../store/favorites-context';
import ConfessionList from '../components/confessions/ConfessionList';

import { getDatabase, ref, child, get, query, orderByKey, orderByChild, orderByValue } from "firebase/database";
import { getAuth } from "firebase/auth";


function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);

  const favoritesCtx = useContext(FavoritesContext);

  const auth = getAuth();
  const user = auth.currentUser;

  var uid = null;
  if (user) {
    uid = user.uid;
  }
  /*
    let content;
  
    if (favoritesCtx.totalFavorites === 0) {
      content = <p><br></br>Start favoriting some confessions!</p>
    } else {
      content = <ConfessionList confessions={favoritesCtx.favorites} />
    }
  */
  useEffect(() => {
    setIsLoading(true);
    const dbRef = ref(getDatabase());
    get(
      child(dbRef, 'users/' + uid + "/favorites")
    )
      .then(response => {
        return response.val();
      }).then(data => {
        const confessions = [];

        for (const key in data) {
          const confession = {
            id: key,
            ...data[key]
          };

          confessions.push(confession);
        }

        setIsLoading(false);
        setLoadedConfessions(confessions);
      });

  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <ConfessionList confessions={loadedConfessions} />
    </section>
  );
}


export default FavoritesPage;
