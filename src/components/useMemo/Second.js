import {useState, useMemo } from "react";

const hardCalculate = (number) => {
  console.log("어려운 계산");
  for (let i = 0; i < 99999999; i++) {}
  return number + 10000;
};

const easyCalculate = (number) => {
  console.log("쉬운 계산");
  return number + 1;
};

export default function Second() {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum=hardCalculate(hardNumber) 
  // const easySum=easyCalculate(easyNumber)
  // input태그의 값을 입력하여 
  // hardNumber 또는 easyNumber의 값이 바뀐다면
  // state값이 바뀌므로 App컴포넌트가 리랜더링됨
  // 그러므로 18,19행의 두 함수도 다시 호출됨 => 이는 콘솔출력으로 확인가능
  // hardCalculate함수의 for문은 99999999번 실행되므로 input필드 입력시 상당히 느려짐
  // 여기서 easyNumber의 값이 바뀌는 쉬운 계산의 input 필드값을 입력으로 바뀌게 한다면
  // hardCalcuate도 같이 호출되어 입력이 상당히 느림
  // easyNumber가 바뀔때는 hardCalculate함수가 호출될 필요 없으므로
  // 메모이제이션위한 useMemo사용 
  const hardSum = useMemo(() => {
    hardCalculate(hardNumber);
  }, [hardNumber]);
  const easySum = useMemo(() => {
    easyCalculate(easyNumber);
  }, [easyNumber]);
  return (
    <div>
      <h3>어려운 계산기</h3>
      <input
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(Number(e.target.value))}
      />
      <span>+ 10000 = {hardSum}</span>
      <h3>쉬운 계산기</h3>
      <input
        type="number"
        value={easyNumber}
        onChange={(e) => setEasyNumber(Number(e.target.value))}
      />
      <span>+ 1= {easySum}</span>
    </div>
  );
}
