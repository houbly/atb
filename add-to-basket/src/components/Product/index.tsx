import { useContext } from 'react';
import { IProductInfo, AppContext } from '../../state/context';
import BasketIcon from '@mui/icons-material/ShoppingBasketOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import formatPrice from '../../helpers/formatPrice';

const Product = ({ product }: { product: IProductInfo }) => {
  const { id, name, price, thumbnail, groupDiscount } = product;
  const { state, dispatch } = useContext(AppContext);
  const addToBasket = () => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { info: product } });
  };
  const inBasket = state.basket.find((item) => item.info.id === product.id);
  return (
    <Card
      variant="outlined"
      id={id}
      sx={{
        borderRadius: 3,
        borderWidth: 2,
      }}
    >
      <CardMedia component="img" alt={name} image={thumbnail} />
      <Box sx={{ padding: '1rem' }}>
        <Typography variant="subtitle1" component="div">
          {name}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{ marginBottom: '1rem' }}
        >
          <Typography variant="h6" component="div">
            {formatPrice(price)}
          </Typography>
          {groupDiscount?.description && (
            <Chip
              label={groupDiscount.description}
              variant="outlined"
              size="small"
              color="primary"
              sx={{ borderWidth: 2 }}
            />
          )}
        </Stack>
        <Button
          size="large"
          variant="contained"
          sx={{ paddingLeft: '0.8rem', paddingRight: '0.5rem' }}
          fullWidth
          onClick={addToBasket}
        >
          {inBasket ? (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ width: '100%' }}
            >
              <Box textAlign="center" sx={{ flexGrow: 1 }}>
                Add another
              </Box>
              <Chip
                size="small"
                color="primary"
                icon={<BasketIcon />}
                label={inBasket.inBasket}
              />
            </Stack>
          ) : (
            'Add to basket'
          )}
        </Button>
      </Box>
    </Card>
  );
};

export default Product;
