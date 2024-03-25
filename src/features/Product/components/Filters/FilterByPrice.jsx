import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import './stylePrice.css'


function FilterByPrice({onChange}) {
    const [values, setValues] = useState({
        salePrice_gte: 0,
        salePrice_lte: 0,
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        if(onChange) {
            onChange(values)
        }
    }
    return (
        <Box className="filter-by-price">
            <Typography variant='subtitle2'>GIÁ</Typography>

            <Box className="range-price">
                <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange} />
                <span>-</span>
                <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange} />
            </Box>

            <Button variant='outlined' color='primary' onClick={handleSubmit} className='btn-filter'>
                Áp dụng
            </Button>
        </Box>
    );
}

export default FilterByPrice;