function List(){

    const fruits = ['apple','orange','grapes','banana']
    const listItems = fruits.map(fruit=><li>{fruit}</li>)
    return (
        <ul>{listItems}</ul>
    )
}

export default List