
const Item = ({item, deleteItem, editInfo}) => {
  const itemToDelete = () => {
   deleteItem(item)
  }

  const itemToEdit = () => {
    editInfo(item)
  }

  return (
    <li>
      {item} <button onClick={itemToDelete}> done</button> <button onClick={itemToEdit}> edit</button>
    </li>
  )
}

export default Item;
