
const Item = ({item, deleteItem}) => {
  const itemToDelete = () => {
   deleteItem(item)
  }

  return (
    <li>
      {item} <button onClick={itemToDelete}> delete</button>
    </li>
  )
}

export default Item;
