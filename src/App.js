import React,{useState,useRef, useEffect} from "react";
import axios from 'axios'
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';
import ResponsiveDrawer from "./Child";
import Main from './Main'
function App() {
    const [movie,setMovie]=useState(null)
    useEffect(()=>{
      axios.get("http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=093fa54b95c0b9d5d8bc4dfdfa089cd3&targetDt=20230108")
        .then((result)=>{
          setMovie(result.data.boxOfficeResult.dailyBoxOfficeList
            )
        })
        .catch(()=>{
          console.log('fail')
        })
        
    },[]) 
    const items = [
  <SidebarItem>Dashboard</SidebarItem>,
  <SidebarItem>Profile</SidebarItem>,
  <SidebarItem>Settings</SidebarItem>,
];
    return (
    <>
    <ResponsiveDrawer/>
    <Main style={{marginLeft:'1000px'}}></Main>
    </>
  );
}

export default App;
