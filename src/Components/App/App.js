import React from 'react'
import './App.css';
import {SearchResults} from '../SearchResults/SearchResults'
import {TrackList} from '../TrackList/TrackList'
import {SearchBar} from '../SearchBar/SearchBar'
import {Playlist} from '../Playlist/Playlist'

class App extends React.Component {
  constructor(props) {
    super(props) 
      this.state = {SearchResults: [
        {
          name: "Example track name",
          artist: "Example track artist",
          album: "Example track album",
          id: "Example track ID",
        },
        {
          name: "Example track name 2",
          artist: "Example track Artist 2",
          albums: "Example track Album 2",
          id: "Example track id",
        },
        {
          name: "Example track name 3",
          artist: "Example track artist 3",
          albums: "Example track Album 3",
          id: "Example track id 3"
        }],
        playlistName: "My Playlist",
        playlistTracks: [
        
        {name: "Playlist Name 1",
        artist: "Playlist Artist 1",
        albums: "PLaylist Album 1",
        id: "4",
        },
        
        {name: "Playlist Name 2",
        artist: "Playlist Artist 2",
        albums: "PLaylist Album 2",
        id: "5",
        },

        {name: "Playlist Name 3",
        artist: "Playlist Artist 3",
        albums: "PLaylist Album 3",
        id: "6",
        }
      ]
      };
      this.addTrack=this.addTrack.bind(this);
      this.removeTrack=this.removeTrack.bind(this);
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

  render () {
  return (
<div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <SearchResults SearchResults={this.state.SearchResults}
                     onAdd={this.addTrack}/> 
       <Playlist playlistName={this.state.playlistName}
                 playlistTracks={this.state.playlistTracks}
                 onRemove={this.removeTrack}  />  
    </div>
  </div>
</div>
  );

  }
}

export default App;
