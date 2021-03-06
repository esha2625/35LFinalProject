import {useState, useEffect} from 'react';
import ConfessionList from "../components/confessions/ConfessionList";
import { db } from "../firebase";
import {useNavigate} from 'react-router-dom';
import {Button, Alert} from 'react-bootstrap';
import { getDatabase, ref, child, get, query, orderByKey, orderByChild } from "firebase/database";
import {useAuth} from '../store/auth-context.js';
import {PrivateRoute} from '../components/layout/PrivateRoute';
import "./dropdown.css"
import "./logout.css"
import "./style.css"

function LogoutPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);
  const [error, setError] = useState('');
  const {currentUser, logout} = useAuth();
  const navigate = useNavigate();


async function handleLogout()
{
  setError('')
  try{
    await logout()
    navigate('/login-page')
  } catch {
    setError("Failed to Logout. You're stuck in Confessional...")
  }
}
  useEffect(() => {
    setIsLoading(true);
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
    
    const oldpost = query(ref(db, 'confessions'), orderByChild('likes'));
   
   get(oldpost).then(response => {
     console.log(response.val())
     return response.val();
   }).then(data => {
     const confessions = [];

     for (const key in data) {
       const confession = {
         id: key,
         ...data[key]
     };
     console.log(confession)

     confessions.push(confession);
   }
   confessions.sort((a, b) => (a.likes > b.likes) ? 1 : -1)
   confessions.reverse();

   
   setLoadedConfessions(confessions);
 }); 

 }

  return (
  <section>
    <div className="HomePage">
      <div className="typewriter">
            <div>
                <h1>Going So Soon?</h1>
            </div>
      </div>
      <div className="logoutButton">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  </section>
  );
}

export default LogoutPage;
