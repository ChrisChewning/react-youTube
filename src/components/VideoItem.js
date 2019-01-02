import React from 'react';
import './VideoItem.css';

//Short captions.
//CSS is in components folder or custom semantic ui ('item')

const VideoItem = ({ video }) => { //destructured from props sent from VideoList
  return (
    <div className="video-item item">
      <img className="ui image" src= { video.snippet.thumbnails.medium.url } />
        <div className="content">
          <div className="header">{ video.snippet.title }</div>
        </div>
      </div>
  );
};

export default VideoItem;


// NOTE: <div>{ video.snippet.thumbnails.medium.url }</div> gives you the error:
// Objects are not valid as a React child (found: object with keys {url, width, height}). If you meant to render a collection of children, use an array instead.
