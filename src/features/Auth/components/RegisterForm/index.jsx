import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, Button, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import "./style.css";
import PasswordField from "../../../../components/form-controls/PasswordField";
function RegisterForm(props) {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("pls enter your full name")
      .test(
        "should has at least two words",
        "pls enter at least two words",
        (value) => {
          return value.split(" ").length > 2;
        }
      ),
  });
  const form = useForm({
    defaultValues: {
      fullname: "",
      retypePassword: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      onSubmit(values);
    }
    form.reset();
  };
  return (
    <div>
      <Avatar>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="form-group">
          <InputField name="fullname" label="Full Name" form={form} />
          <InputField name="email" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <PasswordField
            name="retypePassword"
            label="Retype Password"
            form={form}
          />
        </div>
        <Button variant="contained" color="primary" type="submit">
          Create an account
        </Button>
      </form>
    </div>
  );
}
export default RegisterForm;
