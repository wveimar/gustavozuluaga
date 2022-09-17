import React from "react";
import { useQuery, gql } from "@apollo/client";
import { useLocation } from "react-router-dom";
import Post from "../../components/post/Post";
const PostDetail = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const variant = new URLSearchParams(search).get("variant");
  if (!code) {
    return <p>No Code!</p>;
  }
  const { error, data } = useQuery(SIMPLE_POST_QUERY, {
    variables: {
      where: { code_in: code },
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }
  if (!data) {
    return <p>No Data!</p>;
  }
  const [post] = data.simplePostCollection.items;
  return (
    <div>
      <Post
        title={post?.title}
        imageUrl={post.mainPicture?.url}
        description={post.description}
        isDescriptionHtml={post.isDescriptionHtml}
        variant={variant ? variant : "simple-post"}
        code={code}
      ></Post>
    </div>
  );
};

export default PostDetail;

const SIMPLE_POST_QUERY = gql`
  query simplePostCollection($where: SimplePostFilter) {
    simplePostCollection(where: $where) {
      items {
        title
        description
        isDescriptionHtml
        mainPicture {
          url
        }
      }
    }
  }
`;
