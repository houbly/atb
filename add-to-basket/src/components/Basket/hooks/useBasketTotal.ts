import { useContext } from 'react';
import { AppContext } from '../../../state/context';
import groupDiscount from '../../../helpers/discount';

const useBasketTotal = () => {
  const { state } = useContext(AppContext);
  const { basket } = state;
  const basketTotal = () => {
    if (!basket.length) return;
    const totals = basket.map((item) => {
      if (item.info.groupDiscount) {
        return groupDiscount(
          item.inBasket,
          item.info.price,
          item.info.groupDiscount.groupQuantity,
          item.info.groupDiscount.groupPrice
        );
      }
      return item.info.price * item.inBasket;
    });
    return totals.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  };
  return basketTotal();
};

export default useBasketTotal;
