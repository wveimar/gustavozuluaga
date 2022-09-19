import React from "react";
import { gql, useQuery } from "@apollo/client";
import "./grid-media.css";
import VideoMedia from "../video-media/VideoMedia";

const GridMedia = ({ code }) => {
  const { error, data } = useQuery(GRID_MEDIA_QUERY, {
    variables: {
      where: { code_contains: `${code}-s5-vg` },
    },
  });
  if (error && error.networkError) {
    return <p>Error: {error.networkError.result.errors[0].message}</p>;
  }

  if (!data) {
    return <p>No Data!</p>;
  }

  const [itemsURL] = data.videoGalleryCollection.items;

  const URLVideos = itemsURL.list.videos;

  return (
    <div className="grid-container">
      {URLVideos &&
        URLVideos.map((item, index) => (
          <div style={{margin: "2rem"}}>
            <VideoMedia url={item.url} key={index}/>
          </div>
        ))}
    </div>
  );
};

export default GridMedia;

const GRID_MEDIA_QUERY = gql`
  query videoGalleryCollection($where: VideoGalleryFilter) {
    videoGalleryCollection(where: $where) {
      items {
        code
        list
      }
    }
  }
`;
