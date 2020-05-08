import Page from "../main/Page";
import Theater from "../main/Theater";
import Me from "../main/Me";

export default [
 
   
    {
        path:'/',
        component:Page,
        title:'首页',
        exact:true
    },{
        path:'/Theater',
        component:Theater,
        title:'影院'
    },{
        path:'/Me',
        component:Me,
        title:'我的'
    }
   
]



