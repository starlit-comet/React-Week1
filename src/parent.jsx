import { useState } from "react";
import Child from "./child";
function Parent(){
    const [dataFromChild,setChildData] = useState('inital Value')
    const [parentData,setParentData] = useState('parent inital value')

    function handleChildData(data){
        setChildData(data)
    }
    function handleParentData(e){
        setParentData(e.target.value)
    }

    return <div className="parent-div">
        <h2>parentComponent</h2>
        <h6>Child Data- {dataFromChild}</h6>
        <input type="text" onChange={handleParentData} />
        <Child parentFn={handleChildData} parentData={parentData} />

    </div>
}

export default Parent