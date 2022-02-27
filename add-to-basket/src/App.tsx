import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Sidebar from "./components/Sidebar";
// MUI components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Box>
        <Header />
      </Box>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ProductList>Product list</ProductList>
          </Grid>
          <Grid item xs={12} md={4}>
            <Sidebar>Sidebar content</Sidebar>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
