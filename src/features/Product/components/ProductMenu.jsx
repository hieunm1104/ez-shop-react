import { Box,Link } from "@mui/material";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import './styleProductMenu.css'
function ProductMenu() {
    const {url}  = useRouteMatch()
  return (
    <Box component="ul" className="product-menu">
      <li>
        <Link component={NavLink} to={url} className="link" exact>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} className="link" exact>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} className="link" exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
