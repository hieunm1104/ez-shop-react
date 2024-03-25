import { Box, Typography } from '@mui/material';
import React from 'react';
import { formatPrice } from '../../../utils/common';
import './styleProductInfo.css'

function ProductInfo({product= {}}) {
    const {data} = product;
    return (
        <Box className="product-info">
            <Typography component='h1' variant='h4'>{data?.name}</Typography>
            <Typography variant='body2' className='short_description'>{data?.shortDescription}</Typography>

            <Box className="group-percent">
                <Box component='span'>{
                    formatPrice(data?.salePrice)
                }</Box>
                <Box component='span' className='originalPrice'>{formatPrice(data?.originalPrice)}</Box>
                <Box component='span' className='promotionPercent'>{data?.promotionPercent}</Box>
            </Box>
        </Box>
    );
}

export default ProductInfo;