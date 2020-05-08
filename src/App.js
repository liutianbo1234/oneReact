import React from 'react';
import { connect } from 'react-redux'
import { createStore } from 'redux';
import {
	 BrowserRouter as Router,
    Route,
    NavLink,
	Switch
}from "react-router-dom";
// import axios from 'axios'
import Page from "./main/Page";
import Theater from "./main/Theater";
import Me from "./main/Me";
import './App.css';

class App extends React.Component{
	handerClick=()=>{
		console.log(11111)
		console.log(this)
	    console.log(this.refs.h1)
		
	}

  render(){
      return(
          <div>
		       <Router>
			     <div>
			         <div className="heng">
			               <div><NavLink to="/"  activeStyle={{color:"red"}}>首页</NavLink></div>
						   <div> <NavLink to="/Theater" activeStyle={{color:"red"}}>剧场</NavLink></div>
						   <div><NavLink to="/Me"  activeStyle={{color:"red"}} >我的</NavLink></div>
		             </div>    
		                    
		                     <Switch>
		                     <Route path="/" exact component={Page}></Route>
		                     <Route path="/Theater" component={Theater}></Route>
		                     <Route path="/Me" component={Me}></Route>
							 </Switch>
			     </div>
		       </Router>
			  
		
		  </div>
      )
  }

}

export default App;
