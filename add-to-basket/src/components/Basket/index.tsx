import { useContext } from 'react';
import { AppContext } from '../../state/context';
import formatPrice from '../../helpers/formatPrice';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Basket = () => {
  const { state, dispatch } = useContext(AppContext);
  const { basket } = state;
  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };
  const basketTotal = () => {
    const totals = basket.map((item) => item.info.price * item.inBasket);
    return totals.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };

  return (
    <Box>
      {basket.length === 0 ? (
        <span>Your basket is empty</span>
      ) : (
        <>
          {basket.map(({ info, inBasket }) => (
            <div>
              {info.name}
              <br />
              {formatPrice(info.price * inBasket)}
              <br />
              #in basket:
            </div>
          ))}
          <div>Total: {formatPrice(basketTotal())}</div>
          <Button onClick={clearBasket}>Checkout</Button>
          <Button onClick={clearBasket}>Empty basket</Button>
        </>
      )}
    </Box>
  );
};

export default Basket;
