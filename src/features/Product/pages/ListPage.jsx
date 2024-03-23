import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import "./style.css";
import ProductSort from "../components/ProductSort";
function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 10
  });
  const [filter, setFilter] = useState({
    _page: 1,
    _limit: 12,
    _sort: "salePrice:ASC"
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(filter);
        setProductList(data.data);
        setPagination(pagination);
        console.log("🚀 ~ pagination:", pagination)
      } catch (error) {
        console.log("failed to fetch product list", error);
      }

      setLoading(false);
    })();
  }, [filter]);

  const handlePagination = (e, page) => {
    setFilter((prev) => ({
      ...prev, _page: page}));
    };
  const handleSortChange = (newSortValue) => {
    setFilter((prev) => ({
      ...prev, _sort: newSortValue}));
    };


  return (
    <Box>
      <Container>
        <Grid container spacing={1} className="product-list">
          <Grid item className="left-column">
            <Paper elevation={0}>Left column</Paper>
          </Grid>
          <Grid item className="right-column">
            <Paper elevation={0}>
            <ProductSort currentSort={filter._sort} onChange={handleSortChange} />
              {loading ? (
                <ProductSkeletonList length={12}/>
              ) : (
                <ProductList data={productList} />
              )}
              <Pagination count={Math.ceil(pagination.total.data / pagination.limit)} color="primary" className="pagination" onChange={handlePagination}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
