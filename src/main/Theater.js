import React from "react"
import { Carousel } from 'antd';
import './luyou.css';
import Button from 'antd/lib/button';
import 'antd/dist/antd.css'
 class App extends React.Component{
   constructor(){
     super()
     this.tiaozhuan = this.tiaozhuan.bind(this)
   }
   tiaozhuan(){
    this.props.history.push('/child');
     
   }
  
  
   render() {
       return(
           <div>
 			    <span onClick={this.tiaozhuan}>剧院</span>
               <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="ghost">Ghost</Button>
              <Button type="dashed">Dashed</Button>
            <Carousel >
                <div>
                  <h3>1</h3>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
            </Carousel>,
 		  </div>
       )
   }
 }
 
 export default App;
 
