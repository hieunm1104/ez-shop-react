import React from "react";
import { Box, Grid, Pagination } from "@mui/material";
import Product from "./Product";

function ProductList({ data = [] }) {
  return (
    <Box>
      <Grid container>
        {data.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
            <Product product={product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductList;