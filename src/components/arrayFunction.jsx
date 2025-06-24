import { useState } from "react";

export default function ArrayFunction (){
    const[foods,setFood] = useState(['Apple','Orange','Mango'])

   
    function addFoodItem(){
    const newFood = document.getElementById('foodInput').value.trim()
    if(newFood.length===0) return
    for(let x of foods){
        if(x===newFood) return
    }
    document.getElementById('foodInput').value=''
            setFood((foods)=>[...foods,newFood])
    }

    function removeFoodItem(index){
        setFood(f=>f.filter((a,i)=>i!==index))
    }
    return(
        <div>
            <h2>Food Items</h2>
            <ul>
                {foods.map((f,i)=><li key={i} onClick={()=>removeFoodItem(i)} >{f}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Add new food here" onKeyDown={(e)=>{
                if(e.key==='Enter'){
                    addFoodItem()
                }
            }} />
            <button onClick={addFoodItem}  >AddItem</button>

        </div>
    )
}