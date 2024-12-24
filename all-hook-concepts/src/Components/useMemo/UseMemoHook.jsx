import { useMemo, useState } from "react";

const UseMemoDemo = () =>{

    const [input, setInput] = useState("");

    const calculate = (value) =>{
        console.log("Calculating...");
        return value.length;
    }

    const memoizedResult = useMemo(()=> calculate(input),[input]);


    return(
        <>
        <input type="text" value={input} onChange={(event)=> setInput(event.target.value)}/>
        <span>Input Length = {memoizedResult}</span>
        </>

    );

}
export default UseMemoDemo;