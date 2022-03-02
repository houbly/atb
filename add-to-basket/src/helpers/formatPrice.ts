export default function formatPrice(price: number) {
  return price < 1 ? `${price * 100}p` : `£${price.toFixed(2)}`;
}
