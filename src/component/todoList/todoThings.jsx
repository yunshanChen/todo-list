import React from "react";
import TodoThingsList from "./todoThingsList";
import "../../css/todoThings.css";

function TodoThings(props) {
  return (
    <div className="todo-things">
      {percentBar(props.percent)}
      <TodoThingsList
        scrollRef={props.scrollRef}
        todoList={props.todoList}
        handleCheckbox={props.handleCheckbox}
        deleteItem={props.deleteItem}
      />
    </div>
  );
}

function percentBar(percent) {
  return (
    <div className="section percent">
      <div className="number">{percent}%</div>
      <div className="bar">
        <div className="inner-bar" style={{ width: percent + "%" }}></div>
      </div>
    </div>
  );
}

export default TodoThings;
