import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {formState} = form;
  const { errors } = formState;
  return (
    <Controller
      name={name}
      control={form.control}
      margin="normal"
      variant="outlined"
      render={({ field }) => <TextField {...field} error={!!errors[name]} helperText={errors[name]?.message}   disabled={disabled }
      fullWidth label={label}/>}
    />
  );
}

export default InputField;
