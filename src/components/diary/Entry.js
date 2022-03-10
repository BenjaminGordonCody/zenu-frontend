import "../../styles/archive.css";

export const Entry = ({ post }) => {
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
