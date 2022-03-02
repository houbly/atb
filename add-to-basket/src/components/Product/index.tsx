import { useContext } from 'react';
import { IProductInfo, AppContext } from '../../state/context';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const priceFormat = (price: number) =>
  price < 1 ? `${price * 100}p` : `£${price.toFixed(2)}`;

const Product = ({ product }: { product: IProductInfo }) => {
  const { id, name, price, thumbnail } = product;
  const { dispatch } = useContext(AppContext);
  const addToBasket = () => {
    dispatch({ type: 'ADD_TO_BASKET', payload: { info: product } });
  };
  const removeFromBasket = () => {
    dispatch({ type: 'REMOVE_FROM_BASKET', payload: { id } });
  };
  return (
    <Card variant="outlined">
      <CardMedia component="img" alt={name} image={thumbnail} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
          {priceFormat(price)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={addToBasket}>
          Add to basket
        </Button>
        <Button size="large" onClick={removeFromBasket}>
          remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
