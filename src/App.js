import logo from './logo.svg';
import './App.css';
import './ToDoList.css';
import Name from './Name';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const nameList = ['Sixtine', 'Tony']
  const isFriday = false
  const increment = (x) => {
    setCount(count + x)
  }

  return (
    <div className="App">
      <div>
          {
            nameList?.map((name, i) => {
              const keyName = `${nameList}-${name}-${i}`

              if (name !== 'Tony') {
                return (
                  <Name key={keyName} name={name} />
                )
              }
            })
          }
          {/* <div>
          {isFriday ? <p> Have a nice Friday </p> : <p> Good luck! </p>}
        </div> */}
          {/* <div>
          <DisplayCount value={count} />
          <IncrementCount onClickOk={increment}/>

        </div> */}
      </div>
      <div className='toDoList'>
        <ToDoList />
      </div>
    </div>
  );
}

export default App;

// const DisplayCount = ({value}) => {
//   return (
//     <div> {value} </div>
//   )
// }

// const IncrementCount = ({onClickOk}) => {
//   const addTwo = () => {
//     onClickOk(2)
//   }
//   return (
//     <button onClick={addTwo}>incremente !</button>
//   )
// }
