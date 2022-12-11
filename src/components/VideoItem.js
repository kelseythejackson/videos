import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
  const {
    snippet: { description, thumbnails, title },
  } = video;
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img className="ui image" alt={description} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
