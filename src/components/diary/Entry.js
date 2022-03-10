import "../../styles/archive.css";

export const Entry = ({ post }) => {
  typeof post.date == "string"
    ? (post.date = post.date.slice(0, 10))
    : (post.date = "Undated");
  return (
    <div className="entry">
      <div className="postHeader">
        <div className="postTitle">{post.title}</div>
        <div className="postDate">{post.date}</div>
      </div>
      <div className="postBody">{post.text}</div>
    </div>
  );
};
