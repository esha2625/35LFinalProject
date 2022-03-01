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


function AllConfessionsPage(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedConfessions, setLoadedConfessions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
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
      <ConfessionList confessions={loadedConfessions} />
    </div>
  </section>
  );
}

export default AllConfessionsPage;
