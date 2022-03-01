import React from 'react';
import { AppContext } from './state/context';
import Header from './components/Header';
import Basket from './components/Basket';
import Product from './components/Product';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function App() {
  const { state } = React.useContext(AppContext);

  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography>Products</Typography>
            <Product />
            <Product />
            <Product />
          </Grid>
          <Grid item xs={12} md={4}>
            <Basket>Basket content</Basket>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
