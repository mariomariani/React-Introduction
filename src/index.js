import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDDNVSYCxyCWsOctzIcLCNYd-DRRAW7vrg';

class App extends Component {

    constructor(props) {
        super(props);

        this.videos = [];
        this.videoSearch('accedo');
    }

    videoSearch(searchText) {
        YTSearch({key: API_KEY,searchText: searchText},(videos) => {
            this.videos = videos;
        });
    }
 
    render() {
        return (
             <div>
                <SearchBar/>
                <VideoList videos={this.videos}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('.container')
)