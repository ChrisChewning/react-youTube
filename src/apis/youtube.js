import axios from 'axios';

const KEY = 'AIzaSyCZTLQm8GfNkm6rcLNfW5YWjN4-9MjKsv4';



export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
});


//do we not export default KEY; b.c it's not a class?  
