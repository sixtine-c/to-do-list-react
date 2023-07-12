
const Item = ({item, deleteItem}) => {
  const truc = () => {
    console.log(item)
   deleteItem(item)
  }

  return (
    <li>
      {item} <button onClick={truc}> delete</button>
    </li>
  )
}

export default Item;
