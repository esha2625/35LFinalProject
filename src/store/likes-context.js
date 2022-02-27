import { createContext, useState } from 'react';

const LikesContext = createContext({
  likes: [],
  totalLikes: 0,
  addLike: (likeConfession) => {},
  removeLike: (confessionId) => {},
  itemIsLike: (confessionId) => {}
});

export function LikesContextProvider(props) {
  const [userLikes, setUserLikes] = useState([]);

  function addLikeHandler(likeConfession) {
    setUserLikes((prevUserLikes) => {
      return prevUserLikes.concat(likeConfession);
    });
  }

  function removeLikeHandler(confessionId) {
    setUserLikes(prevUserLikes => {
      return prevUserLikes.filter(confession => confession.id != confessionId);
    });
  }

  function itemIsLikeHandler(confessionId) {
    return userLikes.some(confession => confession.id === confessionId);
  }

  const context = {
    likes: userLikes,
    totalLikes: userLikes.length,
    addLike: addLikeHandler,
    removeLike: removeLikeHandler,
    itemIsLike: itemIsLikeHandler
  };


  return <LikesContext.Provider value={context}>
    {props.children}
  </LikesContext.Provider>
}

export default LikesContext;
