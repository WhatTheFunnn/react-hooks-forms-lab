import React from "react";

function ItemForm({newItem}) {
   
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name"/>
      </label>
          
      <label>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onSubmit={(e) => newItem(e.console.log("hi"))}>Add to List</button>
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