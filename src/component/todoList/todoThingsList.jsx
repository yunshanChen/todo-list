import React from "react";
import InputBar from "./inputBar";

function TodoThingsList(props) {
  const todoList = props.todoList;

  const todoItems = [];
  for (let i = 0; i < todoList.length; i++) {
    todoItems.push(
      <InputBar
        todoItem={todoList[i]}
        handleCheckbox={() => props.handleCheckbox(i)}
        deleteItem={() => props.deleteItem(todoList[i].name)}
        key={"todo" + todoList[i].index + todoList[i].name}
      />
    );
  }
  return (
    <ul className="section todo-things-list" ref={props.scrollRef}>
      {todoItems}
    </ul>
  );
}

export default TodoThingsList;
