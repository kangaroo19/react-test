import { getUser } from "./test";

test('유저 객체값',()=>{
    expect(getUser(1,'kim')).toEqual({id:1,name:'kim'})
})