import React, { useState } from "react";
import "./App.css";

function App() {

  // INITIAL STATE
  const [items, setItems] = useState([
    "Apple",
    "Banana",
    "Orange"
  ]);

  const [newItem, setNewItem] = useState("");


  // ADD ITEM
  const addItem = () => {

    // VALIDATION
    if (newItem.trim() === "") {
      alert("Please enter a valid item.");
      return;
    }

    setItems([...items, newItem]);

    setNewItem("");
  };


  // REMOVE ITEM
  const removeItem = (indexToRemove) => {

    const updatedItems = items.filter(
      (_, index) => index !== indexToRemove
    );

    setItems(updatedItems);
  };


  return (
    <div className="container">

      <h1>Dynamic List Rendering</h1>

      {/* INPUT FIELD */}
      <div className="input-section">

        <input
          type="text"
          placeholder="Enter item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />

        <button onClick={addItem}>
          Add Item
        </button>

      </div>


      {/* EMPTY LIST MESSAGE */}
      {items.length === 0 ? (

        <p className="empty-message">
          No items available.
        </p>

      ) : (

        <ul>

          {/* RENDER LIST USING MAP */}
          {items.map((item, index) => (

            <li key={index}>

              {item}

              <button
                className="remove-btn"
                onClick={() => removeItem(index)}
              >
                Remove
              </button>

            </li>

          ))}

        </ul>

      )}

    </div>
  );
}

export default App;