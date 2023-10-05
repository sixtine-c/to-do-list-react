import { useState, useEffect } from 'react';
import AddToDo from './ToDo/AddToDo';
import EditItem from './ToDo/EditItem';
import Item from './ToDo/Item';
import './ToDoList.css';

const initState = () => {
  const items = window.localStorage.getItem('MY_APP_STATE')
  if (items) {
    return JSON.parse(items)
  }
  return []
}
const ToDoList = () => {
  const [list, setList] = useState(initState)
  const [editIndex, setEditIndex] = useState(null);


  useEffect(() => {
    // Retrieve count from local storage on component mount
    //   console.log('list', list)
    // }, [list])
      window.localStorage.setItem('MY_APP_STATE', JSON.stringify(list));
    }, [list]);


  const addToDo = (item) => {
    setList([...list, item])
  }

  const deleteItem = (item) => {

    const updatedList = list.filter((value) => value !== item);
    setList(updatedList)
  }

  const editInfo = (itemIndex) => {
    if (editIndex !== itemIndex) {
    setEditIndex(itemIndex)
    } else {
      setEditIndex(null)
    }
  }

  const editToDo = (oldItem, newItem) => {
    const updatedList = list.map((value) => {
      if (value === oldItem) {
        value = newItem
      }
      return value
    })
    setList(updatedList)
    setEditIndex(null)
  }



  return (

    <div>
      <div>
        <AddToDo addToDo={addToDo} list={list} />
      </div>

      <div className='list'>
      <h3> Your to-do-list</h3>
        <div className='list-global'>
          {
            list?.map((item, i) => {
              const keyName = `list-${item}-${i}`

              return (
                <div key={keyName}>
                  <div className='list-details' >
                    <Item item={item} deleteItem={deleteItem} editInfo ={() => editInfo(i)}/>
                  </div>
                  {editIndex === i && (
                    <div className='edit-details'>
                      <EditItem item={item} editToDo={editToDo} list={list} />
                    </div>
                  )}
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  )

}

export default ToDoList;
