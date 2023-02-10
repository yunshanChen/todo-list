import React from "react";
import "../css/add.css";

function Add(props) {
  const handleInputChange = props.handleInputChange;
  const handleAddClick = props.handleAddClick;
  const addInputValue = props.addInputValue;

  return (
    <div className="section add">
      <p>Add to list</p>
      <div className="input-group">
        <input
          type="text"
          name="todo-thing"
          id="new-todo"
          value={addInputValue}
          onChange={(e) => handleInputChange(e)}
        />
        <button type="button" className="add-button" onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}

export default Add;
