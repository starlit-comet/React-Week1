import { useState } from "react";

function OnChangeComponent(){
    const [name,setName] = useState('Guest')
    const updateName = (event)=>{
        setName(event.target.value)
    }
    const [number1,setNumber] = useState(8)
    const updateNumber = (event)=>setNumber(event.target.value)
    const[paymentType,setPaymentType] = useState('Not Selected')
    const updatePaymentType=(event)=>{
        setPaymentType(event.target.value)
    }
    const[comment,setComment] = useState()
    const updateComment=(event)=>{
        setComment(event.target.value)
    }
    const [gender,setGender] = useState("Not Selected")
    const updateGender=(event)=>{
        setGender(event.target.value)
    }
    return(
        <div>
            <input value={name} type="text" onChange={updateName} />
            <p>Name: {name}</p>

            <input  onChange={updateNumber} value={number1}  type="number" max={10}/>
            <p>Number : {number1} </p>
            <select onChange={updatePaymentType}>
                <option value="">Choose payment method</option>
                <option value="MasterCard">MasterCard</option>
                <option value="VISA">VISA</option>
                <option value="RuPay">RuPay</option>
            </select>
            <p>payment Chosen : {paymentType}</p>

            <textarea onChange={updateComment} placeholder="Enter some Comments"></textarea>
            <p>Comment:{comment}</p>
            <div>
                <input type="radio" id='male' name='gender' value="Male" onChange={updateGender} />
                <label htmlFor="male">Male</label>

                <input type="radio" id='female' name='gender' value="Female" onChange={updateGender} />
                <label htmlFor="female">Female</label>
                <input type="radio" id='Trans' name='gender' value="Trans" onChange={updateGender} />
                <label htmlFor="Trans">Trans</label>

                <p>Gender Selected: {gender} </p>
            </div>
        </div>
    )
}
export default OnChangeComponent