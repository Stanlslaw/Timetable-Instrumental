import React from "react";
import ReactDOM from "react-dom/client";
import { TextField, MenuItem } from "@mui/material";

export default function Table(props) {
  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const array = [];

  for (let index = 0; index < props.size; index++) {
    array[index] = <>{index}</>;
  }

  const currencies = [
    {
      label: "ОАиП",
      value: "ОАиП",
    },
    {
      label: "СЯП",
      value: "СЯП",
    },
    {
      label: "КЯРД",
      value: "КЯРД",
    },
    {
      label: "СД",
      value: "СД",
    },
    {
      label: "АЛОЦВМ",
      value: "АЛОЦВМ",
    },
  ];

  return (
    <div className="body">
      {array.map((con) => (
        <TextField
          key={con}
          className="cell"
          select
          value={currency}
          onChange={handleChange}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      ))}
    </div>
  );
}
