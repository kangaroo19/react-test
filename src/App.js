import Child from "./Child";
import Parent from "./Parent";
import PhotoOne from "./PhotoOne";
import PhotoTwo from "./PhotoTwo";
import { useState,useEffect, useMemo } from "react";

const hardCalculate=(number)=>{
  console.log('어려운 계산')
  for(let i=0;i<999999999;i++){}
  return number+10000;
}

const easyCalculate=(number)=>{
  console.log('쉬운 계산')
  return number+1;
}
function App() {
  const [number,setNumber]=useState(0)
  const [isKorea,setIsKorea]=useState(true)

  const location=useMemo(()=>{
    return {
      country:isKorea ? '한국' : '외국'
    }
  },[isKorea]) 

  // const location={
  //   country:isKorea ? '한국' : '외국'
  // }

  useEffect(()=>{
    console.log('useEffect 호출')
  },[location]) 
  // setNumber로 인해 number값이 바뀔때 useEffect의 deps는 locatoin이므로 
  // useEffect 안의 콘솔출력은 안될거 같지만
  // setNumber로 인해 리랜더링 되면서 객체로 선언된 location값을 참조하는 메모리 주소 바뀜
  // 그러므로 useEffect 안의 콘솔출력됨
  // 이를 막기위해 useMemo 사용
  // useMemo 사용시 useMemo안의 deps값 바뀌지만 않는다면
  // 이전에 연산한 값 그대로 사용(memoization)
  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={()=>setIsKorea(!isKorea)}>비행기 타자</button>
      <hr />
      <Child/>
      <hr />
      <Parent/>
    </div>
  )
}

export default App;