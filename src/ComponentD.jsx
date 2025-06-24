import { useContext } from "react"
import { UserContext } from "./ComponentA"
function ComponentD(){
    const value = useContext(UserContext)
    return <div className="box">
        <h2 >Component D</h2>
        <p>bye {value}</p>
    </div>
}

export default ComponentD