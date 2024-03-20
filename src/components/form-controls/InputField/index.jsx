import React from "react";
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {formState} = form;
  const { errors } = formState;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      margin="normal"
      variant="outlined"
      render={({ field }) => <TextField {...field} />}
      label={label}
      disabled={disabled}
      fullWidth
      error={!!hasError}
      helperText={errors[name]?.message}
    />
  );
}

export default InputField;
