import products from './products';

import Header from './components/Header';
import Basket from './components/Basket';
import Product from './components/Product';
// MUI components
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

function App() {
  return (
    <Box>
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              Our Products
            </Typography>
            <Divider
              sx={{
                marginBottom: 4,
                border: '2px solid',
                borderColor: 'primary.main',
                maxWidth: 80,
              }}
            />
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
      <Box
        p={3}
        mt={8}
        textAlign="right"
        sx={{ bgcolor: '#f2f2f2', color: 'primary.dark' }}
      >
        &copy; Houston's shop 2022
      </Box>
    </Box>
  );
}

export default App;
