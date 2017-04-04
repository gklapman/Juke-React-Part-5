import { connect } from 'react-redux';
import Station from '../components/Station';
import {convertSong} from '../utils'
import {toggleSong} from '../action-creators/player'

const mapStateToProps = function (state, ownProps) {
    // console.log('state in StationContainer', state)
    // console.log('ownProps in StationContainer', ownProps)
    function isGenre(song) {
        return song.genre === ownProps.params.genre
    }
  return {
      genre: ownProps.params.genre,
      songs: state.songs.filter(isGenre).map(convertSong),
      currentSong: state.player.currentSong,
      isPlaying: state.player.isPlaying,
      progress: state.player.progress
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {

  return {
      toggleOne: function(song, songs) {
          dispatch(toggleSong(song, songs))
      }
  };
}

const StationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Station);

export default StationContainer;