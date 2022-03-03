import { useContext } from 'react';
import { AppContext } from '../../state/context';
import useBasketTotal from './hooks/useBasketTotal';
import formatPrice from '../../helpers/formatPrice';
import groupDiscount from '../../helpers/discount';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ProductSummary from './partials/ProductSummary';

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
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {basket.map(({ info, inBasket }) => (
              <ProductSummary
                name={info.name}
                price={
                  info.groupDiscount
                    ? formatPrice(
                        groupDiscount(
                          inBasket,
                          info.price,
                          info.groupDiscount.groupQuantity,
                          info.groupDiscount.groupPrice
                        )
                      )
                    : formatPrice(info.price * inBasket)
                }
                thumbnail={info.thumbnail}
                quantity={inBasket}
                onDelete={() =>
                  dispatch({
                    type: 'REMOVE_FROM_BASKET',
                    payload: info.id,
                  })
                }
              />
            ))}
          </List>
          <div>Total: {basketTotal && formatPrice(basketTotal)}</div>
          <Button onClick={clearBasket}>Checkout</Button>
          <Button onClick={clearBasket}>Empty basket</Button>
        </>
      )}
    </Box>
  );
};

export default Basket;
