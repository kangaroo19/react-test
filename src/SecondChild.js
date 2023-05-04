import GrandChild from "./GrandChild"
import { memo } from "react"
 function SecondChild({onClick}){
    return (
        <div onClick={onClick}>
            {Array.from({length:1000}).map((_,idx)=>(
                <GrandChild key={idx+1} order={idx}>asdf</GrandChild>
            ))}
        </div>
    )
}

export default memo(SecondChild)