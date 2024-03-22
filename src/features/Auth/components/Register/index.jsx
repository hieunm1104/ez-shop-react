import React from "react";
import RegisterForm from "../RegisterForm";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import { useSnackbar } from "notistack";
function Register(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar()
  const handleSubmit = async (values) => {
    try {
      //auto set username = email
      values.username = values.email;
      //call api to register
      const user = await dispatch(register(values)).unwrap();
      enqueueSnackbar('Register successfully', {variant: 'success'});
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
      <RegisterForm onSubmit={handleSubmit} />
  );
}

export default Register;
