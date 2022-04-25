import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addNewItem}) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchF, setSearchF] = useState("")
  


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true
    
    return item.category === selectedCategory;
  }).filter(item => item.name.toUpperCase().includes(searchF.toUpperCase()))

  return (

    <div className="ShoppingList">
      <ItemForm addNewItem={addNewItem}/>

      <Filter onCategoryChange={handleCategoryChange} setSearchF={setSearchF} searchF={searchF} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
