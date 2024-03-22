import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
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
    email: yup
      .string()
      .required("pls enter your email")
      .email("pls enter a valid email"),
    password: yup.string().required("pls enter your password").min(6, "pls enter at least 6 characters."),
    retypePassword: yup.string().required("pls retype your password").oneOf([yup.ref("password")], "Passwords does not match"),
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
  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const {isSubmitting} = form.formState
  return (
    <div className="register-form">
        {isSubmitting && <LinearProgress className="progress" />}
      <div className="register-header">
        <Avatar>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography component="h3" variant="h5">
          Create An Account
        </Typography>
      </div>
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
        <Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
          Create an account
        </Button>
        </div>
      </form>
    </div>
  );
}
export default RegisterForm;
