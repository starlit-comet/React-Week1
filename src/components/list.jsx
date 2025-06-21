import PropTypes from 'prop-types'

function List(props){

    const category = props.category ?? "Category" 
    const itemList = props.items ?? []

    const listItems = itemList.map(
        item=><li key={item.id} >{item.name}: &nbsp; 
            <b>{item.calories}</b>
             </li>
    )
    return (
        <>
         <h2 className="list-category" >{category}</h2>
        <ol className="list-items">{listItems}</ol>
        </>
    )
}

List.propTypes={
    category : PropTypes.string
}


export default List