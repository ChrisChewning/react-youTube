import React from 'react';
import SearchBar from './SearchBar';
import youTube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

 class App extends React.Component {
   state = { videos: [], selectedVideo: null };

   componentDidMount() {
     this.onTermSubmit('top educational TED Talks');
   }


//this is an async call so you either have to use promise or async / await.
   onTermSubmit = async term => {
    const response = await youTube.get('/search', {
       params: {
         q: term //q is your key from https://developers.google.com/youtube/v3/docs/search/list
         //term is coming from the onTermSubmit param so it's dynamic.
       }
     })
     console.log(response)
     this.setState({
       videos: response.data.items,
       selectedVideo: response.data.items[0]
     }); //drilled down in log.
   }

   onVideoSelect = (video) => {
     console.log('from the app', video);
     this.setState({selectedVideo: video})
   }



  render(){
    return (
      <div className="ui container">
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList
                onVideoSelect = {this.onVideoSelect}
                videos = {this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

 export default App;


 //className='ui conatiner' adds margin on the L side.
//SearchBar has a prop of onFormSubmit (which could be named anything). Whatever is put in there can be sent from the onTermSubmit fn to SearchBar.js.

//<VideoList videos prop now can receive the state of your search.
