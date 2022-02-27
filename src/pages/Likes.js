import { useContext } from 'react';

import LikesContext from '../store/likes-context';
import ConfessionList from '../components/confessions/ConfessionList';

function LikesPage() {
  const likesCtx = useContext(LikesContext);

  let content;

  if (likesCtx.totalLikes === 0) {
    content = <p>Start liking some confessions!</p>
  } else {
    content = <ConfessionList confessions={likesCtx.likes} />
  }

  return (
    <section>
      <h1>My Likes</h1>
      {content}
    </section>
  );
}


export default LikesPage;
