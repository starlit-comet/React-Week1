import { useState,useEffect } from "react";

function Counter(){
    const [count,setCount] = useState(1)
    const [userData,setUserData]= useState({})
    useEffect(()=>{
        async function fetchData(){
            const res = await fetch (`https://jsonplaceholder.typicode.com/users/${count}`)
            const data = await res.json()
            setUserData(data)
            console.log(data)
        }
        fetchData()
    },[count])
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        if(count<=1)return
        setCount(count-1)
    }

    return <div className="card">
        <h2 className="Counter-display">{count}</h2>
        <div className="user-details">
                <h4>{userData.name}</h4>
                <h6>{userData.email}</h6>
                
        </div>
        <div className="control-buttons">
            <button onClick={increment}>➕</button>
            <button on onClick={decrement}>➖</button>

        </div>
    </div>
}

export default Counter