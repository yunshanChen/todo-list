import React, { useEffect, useRef, useState } from "react";
import Sort from "./sort";
import Title from "./title";
import TodoThings from "./todoList/todoThings";
import Add from "./add";
import "../css/card.css";

function Card() {
  // 主要資訊
  const [todoList, setTodoList] = useState([
    {
      index: 1,
      name: "Learn React.js",
      done: false,
    },
    {
      index: 2,
      name: "Learn AAA",
      done: true,
    },
    {
      index: 3,
      name: "Learn CCC",
      done: false,
    },
    {
      index: 4,
      name: "Learn ASDFW",
      done: true,
    },
  ]);
  // 目前完成的進度
  const [percent, setPercent] = useState(0);
  // 是否要將做完的項目排到尾段
  const [sortDoneToEnd, setSortDoneToEnd] = useState(false);
  // 滑動的基準
  const scrollRef = useRef(null);
  // 是否有新增項目
  const [isAdd, setIsAdd] = useState(false);
  // 要新增的項目(文字)
  const [addInputValue, setAddInputValue] = useState("");

  useEffect(() => {
    // 每次只要主要資訊有變動，重新計算完成進度
    percentCalc();
    // 如果是新增的話，自動下滑到最新項目
    if (isAdd) {
      const todoDom = scrollRef.current;
      todoDom.scrollTop = todoDom.scrollHeight;
      setIsAdd(false);
    }
  }, [todoList]);

  // TodoThings: percent的計算
  function percentCalc() {
    let newPercent;
    let tureTodo = todoList.filter((item) => {
      return item.done === true;
    });
    if (tureTodo) {
      newPercent = Math.round((tureTodo.length / todoList.length) * 100);
    } else {
      newPercent = 0;
    }
    setPercent(newPercent);
  }
  // TodoThings: 監聽checkbox
  function handleCheckbox(index) {
    let newTodoList = structuredClone(todoList);
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  }
  // TodoThings: 刪除todo
  function deleteItem(deleteName) {
    let newTodoList = todoList.filter((item) => {
      return item.name !== deleteName;
    });
    setTodoList(newTodoList);
  }

  // Sort: 變更排序
  function handleSort() {
    let newTodoList = [];
    if (!sortDoneToEnd) {
      newTodoList = todoList.filter((item) => {
        return item.done === false;
      });
      todoList.filter((item) => {
        if (item.done === true) {
          newTodoList.push(item);
        }
      });
    } else {
      newTodoList = todoList.sort((a, b) => {
        return a.index > b.index ? 1 : -1;
      });
    }

    setTodoList(newTodoList);
    setSortDoneToEnd(!sortDoneToEnd);
  }

  // Add: 監聽input
  function handleInputChange(e) {
    let newInputValue = e.target.value;
    setAddInputValue(newInputValue);
  }
  // Add: 新增
  function handleAddClick() {
    let newTodoList = structuredClone(todoList);
    let newIndex = newTodoList.length + 1;
    newTodoList.push({
      index: newIndex,
      name: addInputValue,
      done: false,
    });
    setAddInputValue("");
    setTodoList(newTodoList);
    setIsAdd(true);
  }

  return (
    <div className="card">
      <Title />
      <TodoThings
        scrollRef={scrollRef}
        percent={percent}
        todoList={todoList}
        handleCheckbox={handleCheckbox}
        deleteItem={deleteItem}
      />
      <Sort sortDoneToEnd={sortDoneToEnd} handleSort={handleSort} />
      <Add
        addInputValue={addInputValue}
        handleInputChange={handleInputChange}
        handleAddClick={handleAddClick}
      />
    </div>
  );
}

export default Card;
