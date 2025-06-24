import { useState } from "react";

function ColorPicker(){
    const[colorCode,setColor] = useState('#000000')
    const updateColor = (event)=>{
        setColor(event.target.value)
    }
    const styles = {
        backgroundColor:colorCode }
    return(
        <div>
            <h2>Color Picker</h2>
            <div style={{backgroundColor:colorCode}} className="color-container">
                <p>Hex Code : {colorCode}</p>
            </div><label >
            <input type="color" onChange={updateColor}/>
            Choose color</label>
        </div>
    )
}

export default ColorPicker