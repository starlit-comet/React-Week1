import {useRef,useEffect} from 'react'

function UseRefInput(){

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    // console.log(inputRef)
    useEffect(()=>{
        console.log('element rendered')
        // console.log(inputRef)
    })
    function handleClick1(){
        inputRef1.current.focus()
        inputRef2.current.style.backgroundColor=''
        inputRef1.current.style.backgroundColor='green'
        inputRef3.current.style.backgroundColor=''    }
    function handleClick2(){
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor='red'
        inputRef1.current.style.backgroundColor=''
        inputRef3.current.style.backgroundColor=''

        
    }
    function handleClick3(){
        inputRef3.current.focus()
        inputRef2.current.style.backgroundColor=''
        inputRef1.current.style.backgroundColor=''
        inputRef3.current.style.backgroundColor='blue'
    }
    return<>
    <button onClick={handleClick1} >Click 1</button>
    <br />
    <input type="text" ref={inputRef1} id='secretKey' />
    <br />    <br />
    <button onClick={handleClick2} >Click 2</button> <br />
    <input type="text" ref={inputRef2} />
    <br /><br />
    <button onClick={handleClick3}>click 3</button> <br />
    <input type="text" ref={inputRef3} />
    </>
}

export default UseRefInput