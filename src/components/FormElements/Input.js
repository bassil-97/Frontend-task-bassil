import React from "react";

import TextField from "@mui/material/TextField";

export default function Input(props) {
  return (
    <TextField
      type={props.type}
      id={props.id}
      label={props.label}
      variant="outlined"
      sx={{ width: "100%" }}
    />
  );
}
