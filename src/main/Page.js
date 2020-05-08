import React from "react"
import {
    bindActionCreators
} from 'redux';
import { connect } from 'react-redux'
import All_List from '../store/action/index.js'
class App extends React.Component{
	ClickL(n){
			 //if(localStorage.){
				// this.props.history.push({pathname:"/Popular",item:n})
			 //}else{
				 // this.props.history.push({pathname:"/Popular",state:{item:n}})	
			 //}
				  			
	}
   render() {
	   
	   let {theaterList} = this.props;
	    // theaterList=theaterList||[]
       return(
           <div>
 			        <span>票价</span>
					<div>
					{
						theaterList.map((n,i)=>(
						   <div  key={n.id}>  					
						   	<div >	
						   		<div onClick={this.ClickL.bind(this,n)}>
						   			<a className="theater-pic-name-count" >
						   				<div className="ann"><img src= {n.pic}/></div>
						   				<div className="bnn">
						   					<div className="bnn1"> <p>{n.name}</p></div>
						   					<div className="bnn2"><p>{n.count}在售演出</p></div>
						   				</div>
						   			</a>
						   			<a className="theater-link">
						   				...
						   			</a>
						   		</div>
						   	<div className="theater-info2">		
						   			<div className="swiper-container">
						   					<div className="swiper-wrapper">
						   				{
						   					 n.showList.map(v=>(
						   						 <div id="zuo" className="swiper-slide" key={v.id}>
						   							<div className = "shang">{v.show_time}</div>
						   							<div className = "xia"><img src= {v.pic}/></div>
						   						 </div>
						   					 ))					
						   				}			
						   				</div>							
						   			</div>
						   		</div>
						   	</div>
						   </div>
					    ))
					
					}
					</div>
 		  </div>
       )
   }
   componentDidMount(){
	   console.log(All_List)
       this.props.get_theaterList1()
       
   }
 }
const mapStateToProps = state=>{
	console.log("mapStateToProps-->state",state)
	console.log(state.theaterList)
	return{
	   user:state.user,
	   couter:state.couter,
	   theaterList:state.theaterList
	}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(All_List,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
 
