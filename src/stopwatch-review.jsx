// import { useState,useEffect } from "react"

// function StopWatch(){
//     useEffect(()=>{
//         if(isTimeRunning){
//         const timer = setInterval(()=>{
//             setElapsedTime(elapsedTime+1)
//         },1000)
//     }
//     },[isTimeRunning])
//     const [elapsedTime,setElapsedTime]=useState(0)
//     const [isTimeRunning,setIsTimeRunning]=useState(false)
//     function startTimer(){
//         if(isTimeRunning===true) return
//         setIsTimeRunning(true)
//     }
//     function stopTimer(){
//         if(isTimeRunning===false) return
//         setIsTimeRunning(true)
//         console.log(elapsedTime,isTimeRunning)
//     }
//     function changeTime(time){
       
//     }
//  return <>
//     <h1>time : {elapsedTime} </h1>
//     <button onClick={startTimer} >start</button>
//     <button onClick={stopTimer} >Stop</button>
//  </>
// }

// export default StopWatch

import { useState,useEffect } from "react"

function StopWatch(){
    const[elapsedTime,setElapsedTime] = useState(0)
    const [isTimeRunning,setIsTimeRunning] = useState(false)
    useEffect(()=>{
        let interval
        if(isTimeRunning){
             interval = setTimeout(()=>{
                setElapsedTime(elapsedTime+1)
            },1000)

        }
    })
    function startTimer(){
        console.log('startfn,',isTimeRunning)
            if(isTimeRunning) return
            setIsTimeRunning(true)
    }
    function stopTimer(){
        console.log('stopfn',isTimeRunning)
            if(!isTimeRunning) return
            setIsTimeRunning(false)
    }
    return <div>
        <h4>Timer : {elapsedTime}</h4>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer} >Stop</button>
    </div>
}
export default StopWatch
