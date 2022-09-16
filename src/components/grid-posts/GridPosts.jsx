import { useQuery, gql } from "@apollo/client";
import React from "react";
import Post from "../post/Post";
import "./grid-posts.css";

const GridPosts = ({ code, variant }) => {
  const { error, data } = useQuery(GRID_POSTS_QUERY, {
    variables: {
      where: { code_contains: code },
      order:'sort_ASC'
    },
  });

  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const posts = data.simplePostCollection.items;

  return (
    <div>
      <div className="grid-posts-container">
        {posts &&
          posts.map((postInfo, index) => (
            <Post variant={variant}
              imageUrl={postInfo.mainPicture?.url}
              description={postInfo.description}
              isDescriptionHtml={postInfo.isDescriptionHtml}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};

export default GridPosts;

const GRID_POSTS_QUERY = gql`
  query simplePostCollection($where: SimplePostFilter, $order: [SimplePostOrder]) {
    simplePostCollection(where: $where, order:$order) {
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
