import { useContext } from 'react';
import { AppContext } from '../../state/context';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Basket = () => {
  const { state, dispatch } = useContext(AppContext);
  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };
  return (
    <Box>
      {state.basket.map(({ info, inBasket }) => (
        <div>
          {info.name}
          <br />
          {info.price}
          <br />
          #in basket: {inBasket}
        </div>
      ))}
      <Button onClick={clearBasket}>Empty basket</Button>
    </Box>
  );
};

export default Basket;
