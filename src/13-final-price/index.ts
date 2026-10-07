export const discountService = {
  calculateDiscount(price: number): number {
    return price * 0.1;
  },
};

export function getFinalPrice(
  price: number,
  discountService: typeof import("./index.js").discountService,
): number {
  const discount = discountService.calculateDiscount(price);

  return price - discount;
}
