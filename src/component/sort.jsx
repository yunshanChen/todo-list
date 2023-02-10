import React from "react";
import "../css/sort.css";

function Sort(props) {
  const sortDoneToEnd = props.sortDoneToEnd;
  const handleSort = props.handleSort;
  return (
    <div className="section sort">
      <p>Move done things to end?</p>
      <label className="switch">
        <input type="checkbox" checked={sortDoneToEnd} onChange={handleSort} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default Sort;
