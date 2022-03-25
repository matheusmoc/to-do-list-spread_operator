import React, { useState } from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.task}</li>
    </div>
  );
}

export default ToDoItem;
