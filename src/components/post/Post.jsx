import React from "react";
import "./post.css";

const Post = ({ title, variant, description, imageUrl, isDescriptionHtml }) => {
  let postTemplate = <></>;
  switch (variant) {
    case "simple-post":
      postTemplate = (
        <div className="post">
          <img src={imageUrl} alt="image" className="img" />
          <div className="post-container">
            {!isDescriptionHtml ? (
              <p>{description}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>
      );
      break;

    case "detail":
      postTemplate = (
        <div className="post">
          <h2 style={{ textAlign: "center" }}>{title}</h2>
          <div className="post-container">
            {!isDescriptionHtml ? (
              <p>{description}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>
        </div>
      );
      break;
  }

  return postTemplate;
};

export default Post;
