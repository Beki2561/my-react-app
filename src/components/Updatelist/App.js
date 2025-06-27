import React, { useState } from 'react';

function Updatelist() {
  const [foods, setFoods] = useState(["Pizza", "Burger", "Pasta"]);

  function handleAddFood() {
    const input = document.getElementById("foodInput");
    const newFood = input.value.trim();
    if (newFood !== "") {
      setFoods(f => [...f, newFood]);
    }
    input.value = ""; // Clear the input field
  }

  function handleRemoveFood(index) {
    setFoods(foods.filter((_, i) => i !== index));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg space-y-4">
      <h2 className="text-2xl font-bold text-center text-indigo-600">🍕 Food List</h2>
      <ul className="space-y-2">
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            className="cursor-pointer p-2 bg-gray-100 rounded hover:bg-red-200 transition-all"
            title="Click to remove this item"
          >
            {food}
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          id="foodInput"
          placeholder="Enter food name"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={handleAddFood}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Add Food
        </button>
      </div>
    </div>
  );
}

export default Updatelist;
