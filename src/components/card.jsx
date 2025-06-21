
function Card(pr){
    return (
        <div className="card">
            {/* <img className="card-image" src="https://placehold.co/200x200" alt="card image" /> */}
            <h1 className="card-h1" >Name : {pr.name}</h1>
            <p>age:{pr.age}, is verified : {pr.isValid ===true ?"yes":"no" } </p>
        </div>

    )
}


export default Card