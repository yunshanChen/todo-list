import React from "react";

function InputBar(props) {
  const item = props.todoItem;
  const handleCheckbox = props.handleCheckbox;
  const deleteItem = props.deleteItem;
  // 刪除線
  const style = item.done
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <li className="input-bar">
      <input
        type="checkbox"
        name={item.name}
        id={"todo" + item.index + item.name}
        checked={item.done}
        onChange={handleCheckbox}
      />
      <label htmlFor={"todo" + item.index + item.name} style={style}>
        {item.name}
      </label>
      <button type="button" className="delete" onClick={deleteItem}>
        X
      </button>
    </li>
  );
}

export default InputBar;
