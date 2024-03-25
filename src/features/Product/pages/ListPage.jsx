import { Box, Container, Grid, Pagination, Paper } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import productApi from "../../../api/productApi";
import ProductList from "../components/ProductList";
import ProductSkeletonList from "../components/ProductSkeletonList";
import queryString from 'query-string'
import "./styleListPage.css";
import ProductSort from "../components/ProductSort";
import ProductFilters from "../components/ProductFilters";
import FilterViewer from "../components/Filters/FilterViewer";
import { useHistory, useLocation } from "react-router";
function ListPage(props) {
  const [productList, setProductList] = useState([]);
  const history = useHistory()
  const location = useLocation();
  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search)

    return {
      ...params,
      _page: Number.parseInt(params._page) ||1,
      _limit: Number.parseInt(params._limit) || 9,
      _sort: params._sort || 'salePrice:ASC',
      isPromotion: params.isPromotion === 'true',
      isFreeShip: params.isFreeShip === 'true'
    }
  },[location.search])
  
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 10,
  });

  const [filter, setFilter] = useState(() =>(
    {
      ...queryParams,
      _page: Number.parseInt(queryParams._page) || 1,
      _limit: Number.parseInt(queryParams._limit) || 9,
      _sort: queryParams._sort || 'salePrice:ASC'
    }
  ));
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productApi.getAll(queryParams);
        setProductList(data.data);
        setPagination(pagination);
      } catch (error) {
        console.log("failed to fetch product list", error);
      }

      setLoading(false);
    })();
  }, [queryParams]);

  const handlePagination = (e, page) => {
    const filters = {
      ...queryParams,
      _page: page
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters)
    })
  };
  const handleSortChange = (newSortValue) => {
    const filters = {
      ...queryParams,
      _sort: newSortValue
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters)
    })
  };

  const handleFiltersChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters)
    })
  };

  const setNewFilters = (newFilters) => {
    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters)
    })
  }
  return (
    <Box>
      <Container>
        <Grid container spacing={1} className="product-list-page">
          <Grid item className="left-column-listpage">
            <Paper elevation={0}>
              <ProductFilters onChange={handleFiltersChange} filters={queryParams} />
            </Paper>
          </Grid>
          <Grid item className="right-column-listpage">
            <Paper elevation={0}>
              <ProductSort
                currentSort={filter._sort}
                onChange={handleSortChange}
              />
              <FilterViewer filters={queryParams} onChange={setNewFilters} />
              {loading ? (
                <ProductSkeletonList length={12} />
              ) : (
                <ProductList data={productList} />
              )}
              <Pagination
                count={Math.ceil(pagination.total.data / pagination.limit)}
                color="primary"
                className="pagination"
                onChange={handlePagination}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
