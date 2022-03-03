import { useContext } from 'react';
import { AppContext } from '../../state/context';
import useBasketTotal from './hooks/useBasketTotal';
import formatPrice from '../../helpers/formatPrice';
import groupDiscount from '../../helpers/discount';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Basket = () => {
  const { state, dispatch } = useContext(AppContext);
  const { basket } = state;
  const basketTotal = useBasketTotal();
  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
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
              {info.groupDiscount && (
                <span>
                  {formatPrice(
                    groupDiscount(
                      inBasket,
                      info.price,
                      info.groupDiscount.groupQuantity,
                      info.groupDiscount.groupPrice
                    )
                  )}
                </span>
              )}
              <br />
              #in basket:
            </div>
          ))}
          <div>Total: {basketTotal && formatPrice(basketTotal)}</div>
          <Button onClick={clearBasket}>Checkout</Button>
          <Button onClick={clearBasket}>Empty basket</Button>
        </>
      )}
    </Box>
  );
};

export default Basket;
