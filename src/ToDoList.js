import { useState } from 'react';
import AddToDo from './ToDo/AddToDo';
import Item from './ToDo/Item';

const ToDoList = () => {
  const [list, setList] = useState(['call my mom', 'do my React exercise'])
  const addToDo = (item) => {
    setList((list) => [...list, item])
  }

  const deleteItem = (item) => {
    const updatedList = list.filter((value) => value !== item);
    setList(updatedList);
  }

  return (

    <div>
      <div>
        <h1> Your to-do-list</h1>
        <AddToDo addToDo={addToDo} />
      </div>

      <div>
        {
          list?.map((item, i) => {
            const keyName = `${list}-${item}-${i}`

            if (item !== '')
            {
              return (
                <Item key={keyName} item={item} deleteItem={deleteItem}/>
              )
            }
           })
        }
      </div>
    </div>
  )

}

export default ToDoList;
