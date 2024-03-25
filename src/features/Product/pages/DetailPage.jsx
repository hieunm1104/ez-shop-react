import React from 'react';
import { Box, Container, Grid, Paper } from '@mui/material';
import './styleDetailPage.css'
import ProductThumbnail from '../components/Filters/ProductThumbnail';
import { useRouteMatch } from 'react-router';
import useProductDetail from '../hooks/useProductDetail';

function DetailPage() {
    const match = useRouteMatch();
    const {params: {productId}} = match
    const {product, loading} = useProductDetail(productId);
    if(loading){
        return (
            <Box>Loading</Box>
        )
    }
    return (
        <Box>
            <Container>
                <Paper elevation={0}>
                    <Grid container className="product-list">
                        <Grid item className="left-column">
                            <ProductThumbnail product={product}/>
                        </Grid>
                        <Grid item className="right-column">product infor</Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
}

export default DetailPage;