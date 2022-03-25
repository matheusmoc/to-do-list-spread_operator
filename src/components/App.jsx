import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [text, setText] = useState("");

  const [items, setItems] = useState([]); //array for map

  function handleChange(event) {
    // const printConsole = event.target.value;
    // const printConsole2 = event.target.name;
    // console.log(printConsole);
    // console.log(printConsole2);

    const newValue = event.target.value;
    setText(newValue);
  }

  function addItens() {
    //arrow function
    setItems((prevItens) => {
      return [...prevItens, text]; //add new and old item
    });
    setText(""); //empty again
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
      <div className="form">
        <input name="item" onChange={handleChange} type="text" />
        <button onClick={addItens}>
          <span>Add</span>
        </button>
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
    </div>
  );
}

export default App;
