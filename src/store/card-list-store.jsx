import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addpost: () => {},
  addposts: ([]) => {},
  deletepost: () => {},
});

const postlistreducer = (currentpostlist, action) => {
  let newpostlist = currentpostlist;
  if (action.type === "delete") {
    newpostlist = currentpostlist.filter(
      (post) => post.id !== action.payload.postid
    );
  } else if (action.type === "addpost_intial") {
    newpostlist = action.payload.posts;
  } else if (action.type === "addpost") {
    newpostlist = [action.payload, ...currentpostlist];
  }
  return newpostlist;
};
const PostListProvider = ({ children }) => {
  const [postlist, dispatch] = useReducer(postlistreducer, []);

  const addpost = (userID, posttitle, postBody, reaction, tags) => {
    // console.log(`${userID} ${posttitle},${postBody},${reaction},${tags}`);
    dispatch({
      type: "addpost",
      payload: {
        id: Date.now(),
        title: posttitle,
        body: postBody,
        reactions: reaction,
        userID: userID,
        tags: tags,
      },
    });
  };
  const addposts = (posts) => {
    dispatch({
      type: "addpost_intial",
      payload: {
        posts,
      },
    });
  };

  const deletepost = (postid) => {
    dispatch({
      type: "delete",
      payload: {
        postid,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addpost, addposts, deletepost }}>
      {children}
    </PostList.Provider>
  );
};
export default PostListProvider;
