import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import categoryApi from "../../../../api/categoryApi";
import "./styleCategory.css";
function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await categoryApi.getAll();
        setCategoryList(
          res.data.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log("failed to fetch category list", error);
      }
    })();
  }, []);
  const handleOnchangeClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box className="box">
      <Typography variant="subtitle1">DANH MỤC SẢN PHẨM</Typography>
      <ul className="category-list">
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleOnchangeClick(category)}>
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
