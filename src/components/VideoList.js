import React from 'react';
import VideoItem from './VideoItem';

//note: used to props but this is just destructuring.
const VideoList = ({videos}) => {
  const renderedList = videos.map((video) => { //video is your index.
    return <VideoItem video = { video } />; //video object from youTube.
  })



  return <div>{renderedList}</div> //no need for props.videos.length
}

export default VideoList;
