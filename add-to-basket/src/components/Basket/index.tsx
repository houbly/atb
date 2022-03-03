import { useContext } from 'react';
import { AppContext } from '../../state/context';
import useBasketTotal from './hooks/useBasketTotal';
import formatPrice from '../../helpers/formatPrice';
import groupDiscount from '../../helpers/discount';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Stack from '@mui/material/Stack';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import ProductSummary from './partials/ProductSummary';

const Basket = () => {
  const { state, dispatch } = useContext(AppContext);
  const { basket } = state;
  const basketTotal = useBasketTotal();
  const clearBasket = () => {
    dispatch({ type: 'CLEAR_BASKET' });
  };

  return (
    <Card>
      <Box
        p={2}
        fontWeight={700}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #eee',
          color: 'background.paper',
          bgcolor: 'primary.dark',
        }}
      >
        <ShoppingCartOutlinedIcon fontSize="small" sx={{ marginRight: 1 }} />{' '}
        Shopping basket
      </Box>
      <Box>
        {basket.length === 0 ? (
          <Box
            color="text.disabled"
            sx={{
              minHeight: 100,
              backgroundColor: '#f2f2f2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <ShoppingCartOutlinedIcon />
            Your basket is empty
          </Box>
        ) : (
          <>
            <List
              sx={{ width: '100%', bgcolor: 'background.paper', padding: 0 }}
            >
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
            <Box p={2}>
              <Box fontWeight={400} fontSize="1.25rem">
                Total:{' '}
                <strong>{basketTotal && formatPrice(basketTotal)}</strong>
              </Box>
              <Divider sx={{ marginTop: 2, marginBottom: 2 }} />
              <Stack direction="row" alignItems="center" spacing={2}>
                <Button
                  size="large"
                  variant="contained"
                  onClick={clearBasket}
                  sx={{ flexGrow: 1 }}
                >
                  Checkout
                </Button>
                <Button onClick={clearBasket}>Empty basket</Button>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Card>
  );
};

export default Basket;
