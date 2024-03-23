import { useSnackbar } from "notistack";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";
function Login(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar()
  const handleSubmit = async (values) => {
    try {
      //call api to register
      const user = await dispatch(login(values)).unwrap();
      //close dialog
      const {closeDialog} = props;
      if(closeDialog) {
        closeDialog();
      }
    } catch (error) {
      enqueueSnackbar(error.message, {variant: 'error'});
    }
  };
  return (
      <LoginForm onSubmit={handleSubmit} />
  );
}

export default Login;
