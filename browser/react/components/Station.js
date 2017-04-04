'use strict'
import React from 'react'
import Songs from './Songs';

// const DUMMY_GENRE_NAME = 'Jazz';
// const DUMMY_SONGS = [{
//   id: 1,
//   name: "A Love Supreme",
//   genre: "Jazz",
//   artists: [{ name: "John Coltrane" }]
// }];
// const DUMMY_CURRENT_SONG = {};
// const DUMMY_IS_PLAYING = false;
// const DUMMY_TOGGLE_ONE = function () {};

export default function (props) {
    console.log("Station props", props)
  return (
    <div>
      <h3>Station</h3>
      <Songs 
        songs={props.songs} 
        currentSong={props.currentSong} 
        isPlaying={props.isPlaying} 
        toggleOne={props.toggleOne}
      />
    </div>
  );
}


// const Station = (props) => {
//     const station = {
//   "Saxaphone Solo": [{
//     id: 2,
//     name: "Careless Whisper",
//     genre: "Saxophone Solo"
//   }]
// };
//     return (
//     <div>
//       <h3>Jazz Station</h3>
//     {/*   <h3>{ station.name }</h3> */}
//       <Songs {...props} songs={station.songs}/>
//       { station.songs && !station.songs.length && <small>No songs.</small> }
//     </div>
//   );
// }