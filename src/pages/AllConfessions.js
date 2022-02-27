import {useState, useEffect} from 'react';
import ConfessionList from "../components/confessions/ConfessionList";

const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'I have a confession...',
    description:
      'Guys...I slept with the professors lover. Do you think ill still get an A?',
  },
  {
    id: 'c2',
    title: 'Back with another confession...',
    description:
      'My professors lover proposed to me..we are eloping! :0',
  },
  {
    id: 'c3',
    title: 'r/offmychest was down today so here I am',
    description:
      'Once I ate dried milk that i found in the Sproul Hall laundry room.',
  },
  {
    id: 'c4',
    title: 'anyone down to trade? add my snap: @fuccboi',
    description:
      'Looking for beautiful women to trade with...dont be an uggo',
  },
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