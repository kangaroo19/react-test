import { useCallback, useEffect, useMemo, useState } from "react";

export default function First() {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);
  // 여기서 토글버튼을 클릭해 state로 선언된 toggle값이 변경되더라도
  // someFunction은 실행되지 않음
  // someFunction의 의존성 배열은 number이기 때문에 number값이 변할때만 실행됨

    const someFunction= () => {
      console.log(`someFunc : number : ${number}`);
      return;
    };
  //someFunction이 일반 함수일 때는  number값이 바뀐다면 someFunction의 값에 어떠한 영향을 주지 않음에도
  //useEffect의 콘솔이 출력됨
  //이는 number값이 바뀌면서 => 컴포넌트가 리랜더링되고 => 객체타입인 someFunction함수의 메모리 주소값도 같이 바뀌기 때문이다
  
//   const someFunction = useCallback(() => {
//     console.log(`someFunc : number : ${number}`);
//     return;
//   }, [number]);
  // const someFunction = useCallback(() => {
  //   console.log(`someFunc : number : ${number}`);
  //   return 
  // }, [number]);
  //number값이 바뀌면 useCallback을 사용한 someFunction함수는 새로 메모이제이션 되는 값이 갱신됨
  //고로 useEffect의 deps가 someFunction이므로 콘솔이 출력된다
  //someFunction은 이벤트 함수이기 때문에 메모이제이션 된 값을 리턴하는 useMemo로 감싸면
  //실행안됨
  useEffect(() => {
    console.log("someFunction이 변경되었습니다.");
  }, [someFunction]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <br />
      <button onClick={someFunction}>Call somFunc</button>
    </div>
  );
}
