import { Box, Typography } from "@mui/material";
import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../constants";
function Product({ product }) {
  const thumbnailURL = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  return (
    <Box padding={1}>
      <Box minHeight='215px' padding={1}>
      <img src={thumbnailURL} alt={product.name} width="100%" />
      </Box>
      <Typography variant="body2"> {product.name} </Typography>
      <Typography variant="body2">
        <Box component="span"  fontWeight="bold" fontSize='16px'>
          {new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ""}
      </Typography>
    </Box>
  );
}

export default Product;
