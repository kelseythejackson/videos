import axios from 'axios';
const KEY = 'AIzaSyA6zu67sIoQX76kKin8vYItPkOwkGuj5BY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  },
});
