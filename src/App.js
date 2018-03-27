import React from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyAJAnPxx3dYtZ1D7cT1_FG1JIpYCCZpWl0';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
      YTSearch({ key: API_KEY, term: 'cat' }, (data) => {
          this.setState({
              videos: data
          });
      });

  }
  render() {
    return (
        <div>
            <SearchBar />
            <VideoList videos={this.state.videos} />
        </div>
        )
  }
}
