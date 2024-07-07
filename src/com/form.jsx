import { useContext, useRef } from "react";
import { GiHummingbird } from "react-icons/gi";
import { PostList } from "../store/card-list-store";

const Form = () => {
  const { addpost } = useContext(PostList);

  const userIDele = useRef();
  const posttitleele = useRef();
  const postBodyele = useRef();
  const reactionele = useRef();
  const tagsele = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();

    const userID = userIDele.current.value;
    const posttitle = posttitleele.current.value;
    const postBody = postBodyele.current.value;
    const reaction = reactionele.current.value;
    const tags = tagsele.current.value.split(" ");
    userIDele.current.value = "";
    posttitleele.current.value = "";
    postBodyele.current.value = "";
    reactionele.current.value = "";
    tagsele.current.value = "";
    addpost(userID, posttitle, postBody, reaction, tags);
  };

  return (
    <form className="form" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User ID
        </label>
        <input
          ref={userIDele}
          type="text"
          className="form-control forminput"
          placeholder="What's on your mind today?"
          id="userid"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={posttitleele}
          type="text"
          className="form-control forminput"
          placeholder="Be yourself"
          id="title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Body
        </label>
        <textarea
          ref={postBodyele}
          className="form-control forminput"
          placeholder="Describe your idea"
          id="body"
          rows="4"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionele}
          type="number"
          className="form-control forminput"
          placeholder="People's reactions"
          id="reactions"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtags" className="form-label">
          <GiHummingbird />
          Hashtags
        </label>
        <input
          ref={tagsele}
          type="text"
          className="form-control forminput"
          placeholder="Hashtags"
          id="hashtags"
        />
      </div>
      <center>
        <button type="submit" className="btn btn-primary fly">
          <GiHummingbird />
        </button>
        <span className="hide">Let's fly post</span>
      </center>
    </form>
  );
};

export default Form;
