import { useContext } from "react"
import { MyComponent } from "./ComponentA"
function ComponentD(){
    const value = useContext(MyComponent)
    return <div className="box">
        <h2 >Component D</h2>
        <p>bye {value}</p>
    </div>
}

export default ComponentD