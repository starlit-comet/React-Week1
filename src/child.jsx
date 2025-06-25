import { useState,createContext } from "react";

function Child({parentFn,parentData}){
    
    function handleInputChange(e){
        parentFn(e.target.value)
    }
    return <div className="child-div">
        <h2>Child Component</h2>
        <h6>Parent Data-- {parentData}</h6>
        <input type="text" onChange={handleInputChange} />
    </div>
}

export default Child