import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import FilterByCategory from "./Filters/FilterByCategory";
import FilterByPrice from "./Filters/FilterByPrice";
import FilterByService from "./Filters/FilterByService";

ProductFilters.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.object.isRequired,
};

function ProductFilters({ onChange, filters }) {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;
    const newFilters = {
      "category.id": newCategoryId,
    };
    onChange(newFilters);
  };
  const handleChange = (values) => {
    if (onChange) {
      onChange(values);
    }
  };
  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService onChange={handleChange} filters={filters} />
    </Box>
  );
}

export default ProductFilters;
