// implementation of useEffect
// when no dependncy is given the function will call on 

import { useEffect,useState } from "react";

function WidthHeight(){
    const[width,setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)
    useEffect(()=>{
    window.addEventListener('resize', resize)
    console.log('window resized')}
    ,[])

    function resize ( ){
        
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    
    }
    return (
        <div>
            <h4>Width : {width} px</h4>
            <h4>Height: {height} px</h4>
        </div>
    )
}
export default WidthHeight