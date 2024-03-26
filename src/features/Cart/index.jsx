import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { React } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import * as yup from "yup";
import QuantityField from "../../components/form-controls/QuantityField";
import { cartTotalSelector } from "./selectors";
import "./styleCart.css";
import { formatPrice } from "../../utils/common";
import { STATIC_HOST } from "../../constants";

function CartFeature(props) {
  const total = useSelector(cartTotalSelector);
  const product = useSelector((state) => state.cart.cartItems);
  console.log("product: ", product);
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required("Please enter quantity")
      .min(1, "Minimum value is 1")
      .typeError("Please enter a number"),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });
  return (
    <Box className="cart">
      <Grid container spacing={2}>
        <Grid item xs={8} >
          <Paper elevation={0} className="cart-left">
            {product.map((item) => (
              <div className="list-item">
                <img src={`${STATIC_HOST}${item.product.data.thumbnail.url}`} alt="" />
                <Typography>{item.product.data.name}</Typography>
                <Typography>{formatPrice(item.product.data.salePrice)}</Typography>
                <QuantityField name="quantity" label="Quantity" form={form} />
              </div>
            ))}
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper elevation={0}>zzz</Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartFeature;
