import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormHelperText } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
function PasswordField(props) {
  const { form, name } = props;
  const [showPassword, setShowPassword] = useState(false);
  const {formState} = form;
  const { errors } = formState;
  const toggleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  return (
    <div>
      <FormControl error={!!errors[name]} sx={{ m: 1, width: "33ch" }} variant="standard">
        <InputLabel htmlFor={name}>Password</InputLabel>
        <Controller
          type={showPassword ? "text" : "password"}
          name={name}
          control={form.control}
          render={({ field }) => (
            <Input
              {...field}
              id={name}
              fullWidth
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        />
        <FormHelperText>{errors[name]?.message}</FormHelperText>
      </FormControl>
    </div>
  );
}

export default PasswordField;
