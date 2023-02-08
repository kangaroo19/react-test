import React,{useState,useRef, useEffect} from "react";
import axios from 'axios'
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
    
    return (
    <div>
      {movie===null?'loading':movie.map((v,i)=>(
        <div key={i}>{v.movieNm}</div>
      ))}
    </div>
  );
}

export default App;
