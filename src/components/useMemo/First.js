import { useEffect, useMemo, useState } from "react";

export default function First() {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  // const location = isKorea ? "한국" : "외국"; =>원시타입
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "외국",
    };
  },[isKorea]);
  //location 값이 원시타입일 때는 input필드의 state값 (number)이 바뀌어도 useEffect안의 콘솔이 출력되지않음
  //number 값이 바뀌면 state값이 바뀌므로 App컴포넌트가 리랜더링되고 isKorea값이 바뀐다면 useEffect의 deps가 location이므로 useEffect의 콘솔 출력됨
  //location이 원시타입일 경우 number값이 바뀌어도 원시타입에는 값 자체가 담기므로 useEffect의 콘솔 출력되지 않음
  //location이 객체타입일 경우 number값이 바뀌면 객체타입에는 값 자체가 아닌 메모리 주소가 담긴다
  //컴포넌트가 리랜더링될때 location을 참조하는 메모리 주소도 같이 바뀌므로 useEffect가 deps의 location도 같이 바뀐 것으로 간주하여 useEffect 콘솔 출력됨
  //이를 막기위해 location을 useMemo로 감싸 isKorea 값이 바뀌지 않는다면 location 값을 유지하도록 하였음
  useEffect(() => {
    console.log("useEffect 호출");
  }, [location]);
  return (
    <div>
      <h2>하루에 몇끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />
      <h2>어느 나라에 있어요?</h2>
      <p>나라 : {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  );
}
