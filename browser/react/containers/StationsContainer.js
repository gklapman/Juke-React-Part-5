import {connect} from 'react-redux';
import Stations from '../components/Stations';




function mapStateToProps(state, ownProps){
	console.log("state ", state)
	let convertedStations = convertToStations(state.songs)
	return {
		stations: convertedStations
	}
}

function convertToStations(songsArray){
 let stationsObj = {}
 songsArray.map(song => {
 	if (!stationsObj[song.genre]){
 		stationsObj[song.genre] = [song]
 	}
 	else {
 		stationsObj[song.genre].push(song)
 	}
 })

 return stationsObj;

 }

function mapDispatchToProps(dispatch, ownProps){
	return {}
}

const ConnectedStations = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default ConnectedStations





