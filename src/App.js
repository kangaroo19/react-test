import React,{useState,useRef, useEffect} from "react";
import Child from "./Child";

function App() {
  const [number,setNumber]=useState(0)
  const getData=(number)=>{
    setNumber(number)
  }
  const [renderer,setRenderer]=useState(0)
  const doRendering=()=>{
    setRenderer(renderer+1)
  }
  const countRef=useRef(0)
  let countVar=0
  const ref=()=>{
    countRef.current++
    console.log('ref ',countRef.current)
  }
  const Var=()=>{
    countVar++
    console.log('var ',countVar)
  }
  const printResults=()=>{
    console.log(`ref: ${countRef.current} ,var: ${countVar}` )
  }
  const [count,setCount]=useState(1)
  // const [renderCount,setRenderCount]=useState(1)
  const renderCount=useRef(1)
  useEffect(()=>{
    renderCount.current++
    console.log('렌더링 수 ',renderCount.current)
  })
    return (
    <div className="App">
      <p>여기는 부모입니다.</p>
      <Child number={number} getData={getData}></Child>
      <p>{number}</p>
      <p>Ref:{countRef.current}</p>
      <p>Var:{countVar}</p>
      <button onClick={ref}>ref올려</button>
      <button onClick={Var}>var올려</button>
      <button onClick={doRendering}>aa</button>
      <button onClick={printResults}>a123</button>


      <p>Count:{count}</p>
      <button onClick={()=>setCount(count+1)}>올려</button>
    </div>
  );
}

export default App;
