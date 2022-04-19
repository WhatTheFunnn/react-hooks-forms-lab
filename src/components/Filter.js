import React from "react";

function Filter({ onCategoryChange, setSearchF, searchF }) {
  return (
    <div className="Filter">
      <input type="text" name="search" onChange={(e)=>setSearchF(e.target.value)} value={searchF} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;


/*
1. Determine where to add state (search Text is needed by which component)
2. Setup State (Connect state to the input field)
3. State updates with input change (prop >>> onSearchChange as Callback)
4. State value should determine displayed items 

*/