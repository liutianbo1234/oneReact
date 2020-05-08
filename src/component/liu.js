import React from "react"
class LIU extends React.Component{
   render() {
       return(
           <div>
 			        <span>刘天波:{this.props.name}</span>,
					<div>{this.props.msg}</div>
 		  </div>
       )
   }
 }
 
 export default LIU;