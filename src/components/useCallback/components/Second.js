import { useCallback, useEffect, useMemo, useState } from "react";
import Box from "./Box";

export default function Second() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);
  // const createBoxStyle = () => {
  //   return {
  //     backgroundColor: "pink",
  //     width: `${size}px`,
  //     height: `${size}px`,
  //   };
  // };
  // createBoxStyle을 일반 함수로 작성시
  // state로 선언된 isDark를 버튼 클릭하여 바꿨을 때
  // Box 컴포넌트의 useEffect가 실행됨
  // 이는 isDakr의 값이 변하면서 App컴포넌트가 리랜더링되어 createBoxStyle의 메모리 주소도 같이 바뀌기 때문

  const createBoxStyle = useMemo(() => {
    return {
      backgroundColor: "pink",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);
  const test=useMemo(()=>{asdfL:'123'})
  return (
    <div
      style={{
        background: isDark ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />
      <button onClick={() => setIsDark(!isDark)}>change Theme</button>
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}
