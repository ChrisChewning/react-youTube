import React from 'react';

const VideoDetail = ({ video }) => {
  if(!video) { //gets around the state being null error.
    return <div>Loading...</div>
  }


  return (
    <div>{video.snippet.title}</div>
  )

}

export default VideoDetail;
