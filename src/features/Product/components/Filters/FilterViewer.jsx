import { Box, Chip } from "@mui/material";
import React, { useMemo } from "react";
import "./styleViewer.css";
const FILTER_LIST = [
  {
    id: 1,
    getLabel: () => "Miễn Phí Giao Hàng",
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemoveable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters };
      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip;
      } else {
        newFilters.isFreeShip = true;
      }
      return newFilters;
    },
  },
  {
    id: 2,
    getLabel: () => "Có khuyến mãi",
    isActive: () => true,
    isVisible: (filters) => filters.isPromotion,
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.isPromotion;
      return newFilters;
    },
    onToggle: null,
  },
  {
    id: 3,
    getLabel: (filters) =>
      `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: () => true,
    isVisible: (filters) =>
      Object.keys(filters).includes("salePrice_lte") &&
      Object.keys(filters).includes("salePrice_gte"),
    isRemoveable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters };
      delete newFilters.salePrice_gte;
      delete newFilters.salePrice_lte;
      return newFilters;
    },
    onToggle: () => {},
  },
  {
    id: 4,
    getLabel: (filters) => `Danh mục ${filters['category.id']}`,
    isActive: () => true,
    isVisible: (filters) => filters['category.id'],
    isRemoveable: true,
    onRemove: (filters) => {
        const newFilters = { ...filters };
      delete newFilters['category.id'];
      return newFilters;
    },
    onToggle: () => {},
  },
];
function FilterViewer({ filters = {}, onChange = null }) {
  const filterList = useMemo(() => {
    return FILTER_LIST.filter((filter) => filter.isVisible(filters));
  }, [filters]);
  return (
    <Box component="ul" className="filter-viewer">
      {filterList.map((x) => (
        <li key={x.id}>
          <Chip
            size="small"
            label={x.getLabel(filters)}
            color={x.isActive(filters) ? "primary" : "default"}
            clickable={!x.isRemoveable}
            onClick={
              x.isRemoveable
                ? null
                : () => {
                    if (!onChange) return;
                    const newFilters = x.onToggle(filters);
                    onChange(newFilters);
                  }
            }
            onDelete={
              x.isRemoveable
                ? () => {
                    if (!onChange) return;
                    const newFilters = x.onRemove(filters);
                    onChange(newFilters);
                  }
                : null
            }
          />
        </li>
      ))}
    </Box>
  );
}

export default FilterViewer;
