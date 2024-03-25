import React from "react";
import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";

function FilterByService({ onChange, filters = {} }) {
  const handleChange = (e) => {
    if (!onChange) return;
    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className="filter-by-price">
      <Typography variant="subtitle2">DỊCH VỤ</Typography>

      <ul>
        {[
          { value: "isPromotion", label: "Có khuyến mãi" },
          { value: "isFreeShip", label: "Vận chuyển miễn phí" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              label={service.label}
              control={
                <Checkbox
                  onChange={handleChange}
                  checked={Boolean(filters[service.value])}
                  name={service.value}
                  color="primary"
                />
              }
            />
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByService;
