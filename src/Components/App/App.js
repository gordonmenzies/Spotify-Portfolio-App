import React from 'react'
import './App.css';
import {SearchResults} from '../SearchResults/SearchResults'
import {TrackList} from '../TrackList/TrackList'
import {SearchBar} from '../SearchBar/SearchBar'
import {Playlist} from '../Playlist/Playlist'

import {Spotify} from '../../util/Spotify'

class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {SearchResults: [],
        playlistName: 'New Playlist',
        playlistTracks: [
      ]
      
      };
      this.addTrack=this.addTrack.bind(this);
      this.removeTrack=this.removeTrack.bind(this);
      this.updatePlaylistName=this.updatePlaylistName.bind(this);
      this.savePlaylist=this.savePlaylist.bind(this);
      this.search=this.search.bind(this);
    }

/* Searches the list of playlist tracks for an id 
   if id isn't found adds the track to the playlist
*/
  addTrack(track) {
    if (this.state.playlistTracks.find(queryTrack => queryTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track);
    this.setState({playlistTracks: this.state.playlistTracks})
  }  

/* Remove track // takes in a track 
                   searches the plalist for that track
                   removes the track from the playlist (filter js tool)
                   resets the playlistTracks state
*/  

  removeTrack(track) {
    console.log("track filtered")
    console.log(track.id)
    const tracks = this.state.playlistTracks.filter(queryTrack => queryTrack.id !== track.id)
    
    this.setState({playlistTracks: tracks})

  }

  /*
    updatePlaylistName recieved a name
                       sets a state to that name
  */

    updatePlaylistName(name) {
      
      this.setState({playlistName: name})
    }

    /* Save playlist generates an array of uri values from the playlist 
                     tracks property.
                     pass the trackURI array and playlistName to a method
                     that will save the user's playlist to their account.
                     links the app with someone's personal spotify account.
    */

    savePlaylist()  {
      alert("method is linked to the button correctly")
      const trackUris = this.state.playlistTracks.map(track => track.uri);

      Spotify.savePlaylist(this.state.playlistName, trackUris)
      this.setState({playlistName: 'New Playlist'},{playlistTracks: []})
    }

    /* Sources tracks from the Spotify API and reveals them on screen
    */

    search(term) {
      Spotify.search(term).then(searchResults => {
        this.setState({searchResults: searchResults});
      })
    }


  render () {
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults}
                     onAdd={this.addTrack}/> 
       <Playlist playlistName={this.state.playlistName}
                 playlistTracks={this.state.playlistTracks}
                 onRemove={this.removeTrack}  
                 onChange={this.updatePlaylistName}
                 onSave={this.savePlaylist}/>  
    </div>
  </div>
</div>
  );

  }
}

export default App;
