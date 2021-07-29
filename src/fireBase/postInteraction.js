// verifies if the user like post already
export const isLiked = (likes) => {
    for (let i = 0; i < likes.length; i += 1) {
      if (likes[i] === firebase.auth().currentUser.displayName) {
        return true;
      }
    }
    return false;
  };
  
  // like function 
  export const likePost = (postId, likeButton) => {
    const corelike = likeButton;
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((doc) => {
        const userName = firebase.auth().currentUser.displayName;
        console.log("camion",doc.data().like)
        const findUserLike = isLiked(doc.data().like);
        if (findUserLike === true) {
          firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
              like: firebase.firestore.FieldValue.arrayRemove(userName),
            });
          corelike.style.color = '#0a0a0a';
        } else {
          firebase
            .firestore()
            .collection('posts')
            .doc(postId)
            .update({
              like: firebase.firestore.FieldValue.arrayUnion(userName),
            });
          corelike.style.color = '#e23b3b';
        }
      });
  };
  
  // verifies if the current user put like in the posts
  export const showLikes = (postId, likeButton) => {
    const button1 = likeButton;
    firebase
      .firestore()
      .collection('posts')
      .doc(postId)
      .get()
      .then((doc) => {
        const likes = doc.data().like;
        for (let i = 0; i < likes.length; i += 1) {
          if (likes[i] === firebase.auth().currentUser.displayName) {
            button1.style.color = '#e23b3b';
          } else {
            button1.style.color  = '#0a0a0a';
          }
        }
      });
  };

