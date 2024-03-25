import React from "react";
import { Box, Container, Grid, LinearProgress, Paper } from "@mui/material";
import "./styleDetailPage.css";
import ProductThumbnail from "../components/Filters/ProductThumbnail";
import { Route, Switch, useRouteMatch } from "react-router";
import useProductDetail from "../hooks/useProductDetail";
import ProductInfo from "../components/ProductInfo";
import AddToCartForm from "../components/AddToCartForm";
import ProductMenu from "../components/ProductMenu";
import ProductDescription from "../components/ProductDescription";
import ProductAdditional from "../components/ProductAdditional";
import ProductReviews from "../components/ProductReviews";

function DetailPage() {
  const {
    params: { productId },
    url,
  } = useRouteMatch();
  const { product, loading } = useProductDetail(productId);
  if (loading) {
    return (
      <Box className="loading">
        <LinearProgress />
      </Box>
    );
  }

  const handleAddToCartSubmit = (formValues) => {
    console.log("form submit", formValues);
  };
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container className="product-list">
            <Grid item className="left-column">
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className="right-column">
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
