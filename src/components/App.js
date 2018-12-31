import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';
import VideoList from './VideoList';

 class App extends React.Component {
   state = { videos: [] };

//this is an async call so you either have to use promise or async / await.
   onTermSubmit = async term => {
    const response = await youTube.get('/search', {
       params: {
         q: term //q is your key from https://developers.google.com/youtube/v3/docs/search/list
         //term is coming from the onTermSubmit param so it's dynamic.
       }
     })
     console.log(response)
     this.setState({videos: response.data.items}); //drilled down in log.
   }

  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        {/* I have {this.state.videos.length} videos. */}
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

 export default App;


 //className='ui conatiner' adds margin on the L side.
//SearchBar has a prop of onFormSubmit (which could be named anything). Whatever is put in there can be sent from the onTermSubmit fn to SearchBar.js.

//<VideoList videos prop now can receive the state of your search.
