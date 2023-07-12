import { useState } from 'react';
import AddToDo from './ToDo/AddToDo';
import Item from './ToDo/Item';

const ToDoList = () => {
  const [list, setList] = useState(['hello', 'coucou'])
  const addToDo = (item) => {
    setList((list) => [...list, item])
  }

  const deleteItem = (item) => {
    for (var i = 0; i < list.length; i++) {
      if (list[i] === item) {
        list.splice(i, 1);
      }
    }
    console.log(list)
  }

  console.log(list)

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
