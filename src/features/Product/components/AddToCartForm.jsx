import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Button } from "@mui/material";
import PropTypes from 'prop-types'
import QuantityField from "../../../components/form-controls/QuantityField";

AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const schema = yup.object().shape({
    quantity: yup.number().required("Please enter quantity").min(1, 'Minimum value is 1').typeError('Please enter a number')
  });
  const form = useForm({
    defaultValues: {
        quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="form-group">
        <QuantityField name="quantity" label="Quantity" form={form} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          size="large"
        >
            Add to cart
        </Button>
      </div>
    </form>
  );
}

export default AddToCartForm;
