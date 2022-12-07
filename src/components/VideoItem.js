import React from 'react';

const VideoItem = ({ video }) => {
  const {
    snippet: { description, thumbnails },
  } = video;
  return (
    <div>
      <img alt={description} src={thumbnails.medium.url} />
    </div>
  );
};

export default VideoItem;
