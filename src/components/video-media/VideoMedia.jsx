import React from "react";
import ReactPlayer from "react-player";

const VideoMedia = ({ url }) => {
  return (
    <div>
      <ReactPlayer url={url} width="100%" height="100%"/>
    </div>
  );
};

export default VideoMedia;
