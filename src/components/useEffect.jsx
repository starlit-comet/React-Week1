import { useState,useEffect } from "react";

function UseState(){
    const [count,setCount] = useState(0) 
    const[color,setColor] = useState('green')
    useEffect(()=>{
        document.title=`Count: ${count} ++${color}`
    
    },[color,count])
    function addCount(){
        setCount(count+1)
    }
    
    function subCount(){
        setCount(count-1)
    }
    function swapColor(){
        setColor(()=>color==='green'?'red':'green')
    }
    return <>
        <p style={{color}} >Count: {count} ,color:{color} </p>
        <button onClick={addCount} >Increase Count</button> <br/>
        <button onClick={subCount} >decrease Count</button><br/>
        <button onClick={swapColor} >changeColor</button>


    </>
}

export default UseState