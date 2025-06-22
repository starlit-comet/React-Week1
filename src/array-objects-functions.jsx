import { useState } from "react";

function ArrayOfObjectsFunction(){

    const[cars,setCars] = useState([])
    const[year,setYear] = useState( new Date().getFullYear())
    const[model,setModel] = useState('')
    const[make,setMake] = useState('')

    const addCar= (e)=>{
        const newCar = {
            carYear:year,carModel:model,carMake:make
        }
        if(!newCar.carYear || !newCar.carModel || ! newCar.carMake) return
        setCars([...cars,newCar])
        setModel('')
        setMake('')
        setYear(new Date().getFullYear())
    }
    const makeCarYear=(e)=>{
        setYear(e.target.value)
    }
    const makeCarMake= (e)=>{
        setMake(e.target.value)
    }
    const makeCarModel = (e)=>{
        setModel(e.target.value)
    }
    const deleteCar = (index)=>{
        setCars(()=>cars.filter((_,i)=>i!==index))
    }

    return (
        <div>
            <h2>List of Cars</h2>
            <ul>
                {cars.map((car,i)=><li key={i} >{car.carYear} {car.carMake} {car.carModel} <span onClick={()=>deleteCar(i)} className="delete-btn" >❌</span> </li>)}
            </ul>
            <br />
            <input type="number" placeholder="Enter Year" value={year} onChange={makeCarYear} /> <br />
            <input type="text"   placeholder="Enter Make" value={make} onChange={makeCarMake} /> <br />
            <input type="text" placeholder="Enter Model" value={model} onChange={makeCarModel} /> <br />
            <button onClick={addCar} >Add Car</button>
        </div>
    )
}

export default ArrayOfObjectsFunction