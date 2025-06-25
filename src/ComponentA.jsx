// import { useState,createContext } from "react";
// import ComponentB from "./ComponentB";
// export const UserContext = createContext()
// function ComponentA(){
//     const [user,setUser] = useState('King')
//     return <div className="box">
//         <h2 >Component A</h2>
//         <p>Hello, {user}</p>
//         <UserContext.Provider value={user}>
//         <ComponentB  />
//         </UserContext.Provider>
//     </div>
// }

import { createContext } from "react"
import ComponentB from "./ComponentB"
export const MyComponent = createContext()
function ComponentA(){
    return <div>
        <h2>Component A</h2>
        <MyComponent.Provider >
            <ComponentB value={'helloWorld'}  />
        </MyComponent.Provider>
    </div>
}

export default ComponentA