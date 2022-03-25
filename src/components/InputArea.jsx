import React, { useState } from "react";

function InputArea(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    // const printConsole = event.target.value;
    // const printConsole2 = event.target.name;
    // console.log(printConsole);
    // console.log(printConsole2);

    const newValue = event.target.value;
    setText(newValue);
  }

  return (
    <div className="form">
      <input name="item" onChange={handleChange} type="text" value={text} />
      <button
        onClick={() => {
          props.onAdd(text);
          setText(""); //empty again
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
