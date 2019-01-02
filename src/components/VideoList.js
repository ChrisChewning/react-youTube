import React from 'react';
import VideoItem from './VideoItem';

//note: used to props but this is just destructuring.
const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map((video) => { //video is your index.
    return <VideoItem key={video.id.videoId} onVideoSelect= {onVideoSelect} video = {video} />; //video object from youTube.
  })



  return <div className="ui relaxed divided list">{renderedList}</div> //no need for props.videos.length
}

export default VideoList;

//renderedList wraps every individual item. To style it we used the semantic UI docs.
