import { useState } from 'react';

const EditItem = ({ item, editToDo, list}) => {
  const [inputToEdit, setInputToEdit] = useState(item)
  const [errorMessage, setErrorMessage] = useState()
  const oldItem = item

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      editItem()
    }
  }

  const editItem = () => {

    // utiliser un hook, qui va stocker la valeur de l'input


    if (inputToEdit.trim() === '') {
      // Input is empty
      // alert('Your todo is empty!');
      setErrorMessage('Your update is empty!')

    }
    else if (list.includes(inputToEdit)) {
      // alert('You already planned this todo!');
      setErrorMessage('You already planned this todo!')
    }
    else {
      editToDo(oldItem, inputToEdit)
    }
    setInputToEdit('')
  }

return (
  <div className="edit-to-do">
    <div>
      <input type="text" value={inputToEdit} placeholder={inputToEdit} onChange={(e) => setInputToEdit(e.target.value)} onKeyUp={handleKeyPress} />
      <button onClick={editItem}>save</button>
    </div>

    {
      errorMessage && <div className='error-message'> {errorMessage} </div>
    }
  </div>
)
}

export default EditItem;
