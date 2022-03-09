import {useState, useEffect} from 'react';
import ConfessionList from "../components/confessions/ConfessionList";
import { getDatabase, ref, child, get, query, orderByKey, orderByChild } from "firebase/database";
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
  function NewHandler(){
    
    const db = getDatabase();
    const newpost = query(ref(db, 'confessions'), orderByKey());
    get(newpost).then(response => {
      return response.val();
    }).then(data => {
      const confessions = [];

      for (const key in data) {
        const confession = {
          id: key,
          ...data[key]
      };

      confessions.push(confession);
    }console.log(confessions);

    
    setLoadedConfessions(confessions);
  });
  }
  function OldHandler(){
    
    const db = getDatabase();
    const oldpost = query(ref(db, 'confessions'), orderByKey());
    get(oldpost).then(response => {
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
    confessions.reverse();
    console.log(confessions);

    
    setLoadedConfessions(confessions);
  });
    

  }
  function LikeHandler(){
    const db = getDatabase();
    const oldpost = query(ref(db, 'confessions'), orderByChild("likes"));
    get(oldpost).then(response => {
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
    

    
    setLoadedConfessions(confessions);
  });

  }

  return (
  <section>
    <div className = "confessions_wrap">
      <h1>All Confessions</h1>
      <div className="dropdown">
        <button className="dropbtn">Sort</button>
        <div className="dropdown-content">
          <a href="#" onClick= {NewHandler}>Newest</a>
          <a href="#"onClick= {OldHandler}>Oldest</a>
          <a href="#" onClick= {LikeHandler}>Most Liked</a>
        </div>
      </div>
      <ConfessionList confessions={loadedConfessions} />
    </div>

  </section>
  );
}

export default AllConfessionsPage;
