export default function groupDiscount(
  quantity: number,
  unitCost: number,
  discountGroup: number,
  discountGroupCost: number
) {
  const remainder = quantity % discountGroup;
  const discountedItems =
    ((quantity - remainder) / discountGroup) * discountGroupCost;
  const fullPriceItems = remainder * unitCost;
  const newPrice = discountedItems + fullPriceItems;
  const fullPrice = quantity * unitCost;
  return {
    newPrice,
    fullPrice,
    saving: parseFloat((fullPrice - newPrice).toFixed(2)),
  };
}
