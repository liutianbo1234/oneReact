// function couter(state = 0,action){
// 	switch(action.type){
// 		case "add":
// 		return state +1;
// 		default:
// 		return state;
// 	}
// }

// export default couter;

import {couter,theaterList} from './couter';
import user from './user';
import {combineReducers} from 'redux'

export default combineReducers({
	couter:couter,
	user:user,
	theaterList:theaterList
});