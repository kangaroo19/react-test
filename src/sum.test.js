import { sum } from "./test"

//test('테스트코드 이름',테스트 코드)

test('sum 함수를 테스트합니다',()=>{
    expect(sum(1,2)).toBe(3) //테스트코드 1
    expect(sum(2,2)).toBe(4) //테스트코드 2
}) 