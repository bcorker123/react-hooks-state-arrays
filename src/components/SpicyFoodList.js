import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All')


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    setFoods([...foods, newFood])
  }

  function handleLiClick(id){
    //const newFoodArray = foods.filter(food=>food.id !== id)
    const heatFood = foods.find(food=>food.id===id)
    heatFood.heatLevel++
    const newFoodArray = [...foods]
    setFoods(newFoodArray)
  }

  const foodsToDisplay = foods.filter(food=>{
    if(filterBy === "All"){
      return true;
    } else {
      return food.cuisine === filterBy
    }
  })

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={()=>handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  function handleSelect(event){
    setFilterBy(event.target.value);
  }



  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <select name="filter" onChange={handleSelect}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
