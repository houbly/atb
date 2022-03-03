import { useContext } from 'react';
import { AppContext } from '../../../state/context';
import groupDiscount from '../../../helpers/discount';

const useBasketTotal = () => {
  const { state } = useContext(AppContext);
  const { basket } = state;
  const basketTotal = (useDiscount?: boolean) => {
    if (!basket.length) return 0;
    const totals = basket.map((item) => {
      if (item.info.groupDiscount && useDiscount) {
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
  return basketTotal;
};

export default useBasketTotal;
