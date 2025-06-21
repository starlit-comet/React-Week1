import { useState } from "react";

function UpdaterFunction (){
    const [count,setCount]= useState(0)
    const decrement=()=>{
        setCount(count=>count-1)
        setCount(count=>count-1)
        setCount(count=>count-1)
    }
    const increment=()=>{
        setCount(i=>i+1)
        setCount(i=>i+1)
        setCount(i=>i+1)
    }
    const reset=()=>{
        setCount(0)
    }

    return(
        <div>
            <div className="counter-box"><p className="">Current Count :</p> <div className="digit" >{count}</div> 
            </div><div>
            <button  className="counter-button" onClick={()=>decrement()}>Decrement</button>
            <button className="counter-button"  onClick={()=>reset()} >Reset</button>
            <button className="counter-button"  onClick={()=>increment()} >Increment</button>
            </div>
        </div>
    )
}

export default UpdaterFunction