import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage from './pages/ListPage';
import { Box } from '@mui/material';
import DetailPage from './pages/DetailPage';

function ProductFeature(props) {
    const match = useRouteMatch();
    return (
        <Box pt={4}>
            <Switch>
                <Route path={match.url} exact component={ListPage} />
                <Route path={`${match.url}/:productId`} exact component={DetailPage} />
            </Switch>
        </Box>
    );
}

export default ProductFeature;