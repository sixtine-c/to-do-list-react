const AddToDo = ({ addToDo }) => {
  const addItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    addToDo(formJson['newItem'])
    form.reset()
  }

  return (

    <form onSubmit={addItem}>
      <input type="text" placeholder="Add a new to-do" name="newItem" />

      <button type="submit">save</button>
    </form>

  )
}

export default AddToDo;
