import React, {useState} from "react";

function ItemForm({addNewItem}) {
  const [newItem, setNewItem] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameInput(event){
    setNewItem(event.target.value)    
  }

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addNewItem({name: newItem, category});
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>

      <label>
        Name:
        <input type="text" name="name" 
        value={newItem} onChange={handleNameInput}/>
      </label>
          
      <label>
        Category:
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
  
}

export default ItemForm;


/*
1. Make All input fields controlled inputs 
2. When using the initial state <select> tag, use initial value of "Produce"
3. Handle Forms submit Event.
4. Add new item to the list by updating state 
5. Use prop onItemFormSubmit as a CALLBACK passing new item to it (spread operator)

*/