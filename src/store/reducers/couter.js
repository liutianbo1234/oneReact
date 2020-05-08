 
 import get_theater from '../action/index.js'
 // const get_theaterList = "get_theaterList"
 export function couter(state = 0,action){
	switch(action.type){
		case "add":
		return state +1;
		default:
		return state;
	}
}

export function theaterList(state = [],action){
	state = JSON.parse(JSON.stringify(state));
	switch(action.type){
		case "get_theaterList1":
		console.log(2222)
		return action.payload;
		default:
		console.log(11111)
		return state;
	}
}

