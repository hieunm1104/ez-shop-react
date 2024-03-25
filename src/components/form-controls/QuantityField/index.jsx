import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, FormHelperText, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import React from "react";
import { Controller } from "react-hook-form";
import "./style.css";
function QuantityField(props) {
  const { form, label, name } = props;
  const { formState, setValue } = form;
  const { errors } = formState;

  return (
    <div>
      <FormControl
        error={!!errors[name]}
        sx={{ m: 1, width: "33ch" }}
        variant="standard"
      >
        <Typography>{label}</Typography>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => (
            <Box className="quantity-box">
              <IconButton
                onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) - 1 : 1)}
              >
                <RemoveCircleOutline/>
              </IconButton>
              <Input
                value={field.value}
                {...field}
                id={name}
                fullWidth
                type="number"
              />
              <IconButton
                onClick={() => setValue(name, Number.parseInt(field.value) ? Number.parseInt(field.value) + 1 : 1)}
              >
                <AddCircleOutline />
              </IconButton>
            </Box>
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default QuantityField;
