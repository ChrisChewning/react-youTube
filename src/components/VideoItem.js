import React from 'react';
import './VideoItem.css';

//Short captions.
//CSS is in components folder or custom semantic ui ('item')

const VideoItem = ({ video, onVideoSelect }) => { //destructured from props sent from VideoList
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        alt={video.snippet.title}
        className="ui image"
        src= { video.snippet.thumbnails.medium.url }
      />
        <div className="content">
          <div className="header">{ video.snippet.title }</div>
        </div>
      </div>
  );
};

export default VideoItem;


// NOTE: you need the img tag. If you just put it in a div you get the error:
// Objects are not valid as a React child (found: object with keys {url, width, height}). If you meant to render a collection of children, use an array instead.

//NOTE 2: your callback for onVideoSelect(video) is how you send child-parent.
