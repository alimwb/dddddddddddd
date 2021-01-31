import React, { useState } from "react";
import Select from "react-select";
import { colourOptions as options } from "./data";

export const Example = ({ setSelected, setAction }) => {
  const [value, setValue] = useState();

  const onChange = (option, { action }) => {
    setValue(option);
    setSelected(option);
    setAction(action);
  };

  return (
    <Select
      {...{ value, onChange, options }}
      isClearable
      isOptionDisabled={opt => opt.disabled}
      getOptionLabel={opt => opt.label}
      getOptionValue={opt => opt.value}
    />
  );
};

export const Selected = ({ selected }) => {
  if (selected) {
    return (
      <h3 style={{ backgroundColor: selected.color }}>
        Selected: {selected.value}
      </h3>
    );
  }
  return null;
};

export const Action = ({ action }) => {
  if (action) {
    if (action === "clear") {
      return <h3>Action: Option Cleared - {action}</h3>;
    }
    return <h3>Action: Option set - {action}</h3>;
  }
  return null;
};
