import { createContext, useState } from 'react';

const LikesContext = createContext({
  likes: [],
  totalLikes: 0,
  addLike: (favoriteConfession) => {},
  removeLike: (confessionId) => {},
  itemIsLike: (confessionId) => {}
});

export function LikesContextProvider(props) {
  const [userLikes, setUserLikes] = useState([]);

  function addLikeHandler(likeConfession) {
    setUserLikes((prevuserLikes) => {
      return prevuserLikes.concat(likeConfession);
    });
  }

  function removeLikeHandler(confessionId) {
    setUserLikes(prevuserLikes => {
      return prevuserLikes.filter(confession => confession.id != confessionId);
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