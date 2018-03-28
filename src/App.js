import React from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAJAnPxx3dYtZ1D7cT1_FG1JIpYCCZpWl0';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('cat');
  }

  videoSearch  (term) {
      YTSearch({ key: API_KEY, term: term }, data => {
          this.setState({
              videos: data,
              selectedVideo: data[0]
          });
      });
  }

  render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={ videoSearch } />
          <div className="row">
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
             onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
             videos={this.state.videos}
        />
          </div>
      </div>
    );
  }
}
