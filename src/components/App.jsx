import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]); //array for map

  function addItens(text) {
    //arrow function
    setItems((prevItens) => {
      return [...prevItens, text]; //add new and old item
    });
  }

  function deleteItens(id) {
    //console.log(id);
    setItems((prevItens) => {
      return prevItens.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItens} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              task={todoItem}
              onChecked={deleteItens}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
