export function calculateFinalPrice(price: number, quantity: number): number {
  const total = price * quantity;

  if (total >= 500) {
    return total * 0.9;
  }

  return total;
}
