import { useState,useEffect, useCallback,useMemo } from "react"

function Child(){
  const [number,setNumber]=useState(0)
  const [toggle,setToggle]=useState(true)
  const someFunction=useCallback(()=>{ 
    console.log(`someFunc: number: ${number}`)
    return 
  },[number])
  //deps에 number가 없다면 number값을 아무리 바꿔도 이전에 연산한 값을 사용하기 때문에
  //useCallback 안의 number 값은 최초 랜더링 될 때의 number 값인 0만 출력
  //deps에 number를 넣음으로써 useCallback안의 number도 업데이트 되도록 함
  useEffect(()=>{
    console.log('someFunc 변경됨')
  },[someFunction])
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call someFunc</button>
    </div>
  )
}

export default Child