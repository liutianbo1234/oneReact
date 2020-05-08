import axios from 'axios'
import {
	get_theaterList1,	
} from "./list.js";
export function get_theater(payload) {
	// console.log(payload)
	return {
		type:get_theaterList1,
		payload
	}
	
}

export default {
	  get_theaterList1() {
		return async (dispatch) => {
				const {
					data
				} = await axios.get("https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=1");
				
			    dispatch(get_theater(data.data.theatre_list));			
				console.log(data.data.theatre_list)
			   }
		},
		
	liutianbo(){
		
	}
	
}