import { useState } from "react";

export default function ArrayFunction (){
    const[foods,setFood] = useState(['Apple','Orange','Mango'])

   
    function addFoodItem(){
    const newFood = document.getElementById('foodInput').value
    document.getElementById('foodInput').value=''
            setFood((foods)=>[...foods,newFood])
    }

    function removeFoodItem(){
        
    }
    return(
        <div>
            <h2>Food Items</h2>
            <ul>
                {foods.map((f,i)=><li key={i} >{f}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Add new food here" />
            <button onClick={addFoodItem}  >AddItem</button>

        </div>
    )
}