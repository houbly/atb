export default function groupDiscount(
  quantity: number,
  unitCost: number,
  groupSize: number,
  groupCost: number
) {
  const remainder = quantity % groupSize;
  const discountedItems = ((quantity - remainder) / groupSize) * groupCost;
  const fullPriceItems = remainder * unitCost;
  const newPrice = discountedItems + fullPriceItems;
  const fullPrice = quantity * unitCost;
  return newPrice < fullPrice ? newPrice : fullPrice;
}
