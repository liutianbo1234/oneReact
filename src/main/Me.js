import React from "react";
import LIU  from '../component/liu.js';
import axios from 'axios';
class App extends React.Component{
	constructor(props){
	    super(props)
	    this.state = {
	        message:"我是父组件传来的",
			theaterdata:[],
	    }
		 this.tiaozhuan = this.tiaozhuan.bind(this)
		
	}
	tiaozhuan(){
	 this.props.history.push('/child1');
	  
	}
   render() {
	 const data = this.state.theaterdata  ||[]
       return(
           <div>   
		   <span onClick={this.tiaozhuan}>剧院</span>
 			        <span  ref={elem => this.nv = elem}>我的</span>
					<LIU name={"STE教程"} msg={this.state.message}></LIU>
					{
						data.map((item,i)=>{
							return(
							   <div key={i}>
							      {item.name}
							   </div>
							)
							
						})
					}
					
 		  </div>
       )
   }
    handleNvEnter = (event) => {
       console.log("Nv Enter:", event);
     }
   componentDidMount(){
	   var that = this
	   this.nv.addEventListener("nv-enter", this.handleNvEnter);
	   console.log(11111)
	   axios.get('https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.1.1&referer=1')
	     .then(function (response) {
	        
		     
		     that.setState({
		            theaterdata:response.data.data.theatre_list
		           })
				  
	     })
	     .catch(function (error) {
	       console.log(error);
	     });
		 
		
   }
 }
 
 export default App;
 
