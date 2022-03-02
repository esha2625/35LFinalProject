import {useState, useEffect} from 'react';
import ConfessionList from "../components/confessions/ConfessionList";
import { getDatabase, ref, child, get } from "firebase/database";
import "./dropdown.css"

function AllConfessionsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    /*
    fetch(
      'https://bruinfessions-e55f6-default-rtdb.firebaseio.com/confessions.json'
    )
      .then(response => {
        return response.json();
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

      */
    const dbRef = ref(getDatabase());
    get(
      child(dbRef, 'confessions/')
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
    <div className = "confessions_wrap">
      <h1>All Confessions</h1>
      <div className="dropdown">
        <button className="dropbtn">Sort</button>
        <div className="dropdown-content">
          <a href="#">Newest</a>
          <a href="#">Oldest</a>
          <a href="#">Most Liked</a>
        </div>
      </div>
      <ConfessionList confessions={loadedConfessions} />
    </div>

  </section>
  );
}

export default AllConfessionsPage;
