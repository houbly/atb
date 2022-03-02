import React from 'react';
import products from './products';

import Header from './components/Header';
import Basket from './components/Basket';
import Product from './components/Product';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography>Products</Typography>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} md={6} key={product.id}>
                  <Product product={product} />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Basket />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
