import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.object.isRequired
};

function ProductFilters({onChange, filters}) {
    const handleCategoryChange = (newCategoryId) => {
        if(!onChange) return;
        const newFilters = {
            'category.id': newCategoryId
        }
    onChange(newFilters);
    }
    const handlePriceChange = (values) => {
        if(onChange){
            onChange(values)
        }
    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFilters;