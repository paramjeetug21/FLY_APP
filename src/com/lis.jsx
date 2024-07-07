import { useContext, useState } from "react";
import Card from "./card";
import { PostList } from "../store/card-list-store";
import Welcome from "./welcome";

const List = () => {
  const { postlist, addposts } = useContext(PostList);
  const [datafetched, setdatafetched] = useState(false);
  if (!datafetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addposts([]);
      });
    setdatafetched(true);
  }

  return (
    <>
      {postlist.length === 0 && <Welcome></Welcome>}
      {postlist.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </>
  );
};
export default List;
