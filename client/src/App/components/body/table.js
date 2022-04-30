import React from "react";
import ReactDOM from "react-dom/client";

export default function Table(size) {
  const array = [];

  for (let index = 0; index < 225; index++) {
    array[index] = <></>;
  }

  return (
    <div className="body">
      {array.map((con) => (
        <div className="cell" key={con}>
          {con}
        </div>
      ))}
    </div>
  );
}
