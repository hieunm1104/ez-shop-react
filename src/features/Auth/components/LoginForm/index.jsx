import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-controls/InputField";
import { Avatar, Button, LinearProgress, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import "./style.css";
import PasswordField from "../../../../components/form-controls/PasswordField";
function LoginForm(props) {
  const schema = yup.object().shape({
    identifier: yup
      .string()
      .required("pls enter your email")
      .email("pls enter a valid email"),
    password: yup.string().required("pls enter your password"),
  });
  const form = useForm({
    defaultValues: {
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
  const { isSubmitting } = form.formState;
  return (
    <div className="register-form">
      {isSubmitting && <LinearProgress className="progress" />}
      <div className="register-header">
        <Avatar>
          <LockOutlined></LockOutlined>
        </Avatar>
        <Typography component="h3" variant="h5">
          Sign in
        </Typography>
      </div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="form-group">
          <InputField name="identifier" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={isSubmitting}
          >
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
