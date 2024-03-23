import React, { useState } from "react";
import PropTypes from "prop-types";
import { Tab, Tabs } from "@mui/material";

ProductSort.propTypes = {
  currentSort: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

function ProductSort({ currentSort, onChange }) {
  const handleSortChange = (event, newValue) => {
    if (onChange) {
      onChange(newValue);
    }
  };
  return (
    <Tabs value={currentSort} onChange={handleSortChange} indicatorColor="primary" textColor="primary" aria-label="disabled tabs example"> 
      <Tab label="Gía thấp tới cao" value="salePrice:ASC" />
      <Tab label="Gía cao xún thấp" value="salePrice:DESC" />
    </Tabs>
  );
}

export default ProductSort;
