import { IProduct } from '../../state/context';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Product = ({ product }: { product: IProduct }) => {
  const { id, name, price, thumbnail } = product;
  console.log(thumbnail);
  const addToBasket = () => {
    console.log(`add product ${id} to basket`);
  };
  return (
    <Card variant="outlined">
      <CardMedia component="img" alt={name} image={thumbnail} />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {name}
        </Typography>
        <Typography variant="h5" component="div" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={addToBasket}>
          Add to basket
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;
