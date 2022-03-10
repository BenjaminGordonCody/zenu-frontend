export const Entry = ({ post }) => {
  return (
    <div className="entry">
      <div id="postHeader">
        <div id="postTitle">{post.title}</div>
        <div id="postDate">{post.date}</div>
      </div>
      <div id="postBody">{post.text}</div>
    </div>
  );
};
