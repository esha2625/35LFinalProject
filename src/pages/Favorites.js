import { useState, useEffect } from 'react';

import ConfessionList from '../components/confessions/ConfessionList';

import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth } from "firebase/auth";


function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);

  const auth = getAuth();
  const user = auth.currentUser;

  var uid = null;
  if (user) {
    uid = user.uid;
  }

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
