

function Button(){
    let count =0
    // const handler = ()=>console.log('button pressed')
    const handler2 = (e)=>{
       e.target.textContent = "button clicked"
    }
    // return (
    //     <button onDoubleClick={(e)=>handler2('hari',e)} >Click me ☠</button>
    // )

    return (
        // <img src="https://placehold.co/200x250" onClick={(e)=>handler2(e)} ></img>
        <button onClick={(e)=>handler2(e)} >Click to hide</button>
    )
}

export default Button