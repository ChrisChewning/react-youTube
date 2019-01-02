import React from 'react';

//Short captions

const VideoItem = ({ video }) => { //destructured from props sent from VideoList
    return (
      <div>

        <img src= { video.snippet.thumbnails.medium.url } />

        { video.snippet.title }

  </div>
)}

export default VideoItem;


// NOTE: <div>{ video.snippet.thumbnails.medium.url }</div> gives you the error:
// Objects are not valid as a React child (found: object with keys {url, width, height}). If you meant to render a collection of children, use an array instead.
