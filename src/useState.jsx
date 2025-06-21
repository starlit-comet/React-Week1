import { useState } from "react";

function UseStateComponent(){
    const[name,setName] = useState('Initial Name')
    // console.log(useState)
    const updateName = ()=>{
        setName('new changed name')
    }
    const [age, setAge] = useState(5)
    const increaseAge = ()=>{
        setAge(age+1)
    }

    const[isStudent,changeIsStudent] = useState(false)
    const toggleStudent = ()=>{
        changeIsStudent(!isStudent)
    }

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={()=>updateName()} >Change Name</button>
            <p>Age:{age}</p>
            <button onClick={()=>increaseAge()} >Increase Age</button>
            <p>is Student : {isStudent?"Yes":"No"} </p>
            <button onClick={()=>toggleStudent()} > Toggle Student Status</button>
        </div>
    )
}

export default UseStateComponent