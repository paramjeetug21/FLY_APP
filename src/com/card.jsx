import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { PostList } from "../store/card-list-store";

const Card = ({ post }) => {
  const { deletepost } = useContext(PostList);
  return (
    <div className="container ">
      <div className="card carddd " style={{ width: "18rem" }}>
        <div className="card-body cardd">
          <h5 className="card-title ">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletepost(post.id)}
            >
              <FaDeleteLeft />
              <span className="visually-hidden">unread messages</span>
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hastag">
              {tag}
            </span>
          ))}
          <div className="alert alert-info" role="alert">
            {post.reactions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
