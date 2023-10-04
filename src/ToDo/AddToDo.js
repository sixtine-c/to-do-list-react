import { useState } from 'react';
import './addToDo.css';

const AddToDo = ({ addToDo, list }) => {
  const [inputToDo, setInputToDo] = useState('')
  const [errorMessage, setErrorMessage] = useState()

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      addItem()
    }
  }


  const addItem = () => {

    // utiliser un hook, qui va stocker la valeur de l'input


    if (inputToDo.trim() === '') {
      // Input is empty
      // alert('Your todo is empty!');
      setErrorMessage('Your todo is empty!')

    }
    else if (list.includes(inputToDo)) {
      // alert('You already planned this todo!');
      setErrorMessage('You already planned this todo!')
    }
    else {
      addToDo(inputToDo)
    }
    setInputToDo('')
  }

  return (
    <div className="add-to-do">
      <div className="input-container">
        <input type="text" value={inputToDo} placeholder="Add a new to-do" onChange={(e) => setInputToDo(e.target.value)} onKeyUp={handleKeyPress} />

        <button onClick={addItem}>save</button>
      </div>

      {
        errorMessage && <div className='error-message'> {errorMessage} </div>
      }



    </div>


  )
}

export default AddToDo;
