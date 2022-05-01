import React from "react";
import ReactDOM from "react-dom/client";
import { TextField } from "@mui/material";

export default function Table(props) {
  const array = [];

  for (let index = 0; index < props.size; index++) {
    array[index] = <></>;
  }

  return (
    <div className="body">
      {array.map((con) => (
        <TextField
          className="cell"
          margin="normal"
          color="common"
          focused
        />
      ))}
    </div>
  );
}
