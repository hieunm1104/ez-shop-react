import { Box } from "@mui/material";
import React from "react";
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from "../../../../constants";

function ProductThumbnail({ product }) {
  const thumbnailURL = product.data?.thumbnail
    ? `${STATIC_HOST}${product.data.thumbnail?.url}`
    : `${THUMBNAIL_PLACEHOLDER}`;
  return (
    <Box>
      <img src={thumbnailURL} alt={product.name} width="100%" />
    </Box>
  );
}

export default ProductThumbnail;
