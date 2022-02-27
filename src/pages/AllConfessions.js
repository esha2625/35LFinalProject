import {useState, useEffect} from 'react';
import ConfessionList from "../components/confessions/ConfessionList";

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'I have a confession...',
    description:
      'Guys...I ____ with the professors ___. Do you think I will still get an A?',
  },
  {
    id: 'c2',
    title: 'Back with another confession...',
    description:
      'My professors ____ proposed to me..we are ____',
  },
  {
    id: 'c3',
    title: 'r/offmychest was down today so here I am',
    description:
      'Once I ate dried milk that i found in the Sproul Hall laundry room.',
  }
];


function AllConfessionsPage() {
  /*
  const [loading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);
  
useEffect(() => {  
  setIsLoading(true);
  fetch(
  'https://bruinfessions-default-rtdb.firebaseio.com/'
  ).then(response => {
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
    setLoadedConfessions(data);
  });}, []);

    if (loading)
    {
    return (
    <section>
      <p>Loading Juicy Gossip...Please Wait!</p>
    </section>
    );
    } */

    return (
    <section>
        <h1>All Confessions</h1>
<ConfessionList confessions={DUMMY_DATA}/>
    </section>
    );
}

export default AllConfessionsPage;