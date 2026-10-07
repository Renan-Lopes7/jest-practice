type ProductService = {
  getProductPrice: (productId: number) => Promise<number>;
};

type Order = {
  productId: number;
  quantity: number;
  total: number;
};

export async function createOrder(
  productId: number,
  quantity: number,
  productService: ProductService,
): Promise<Order> {
  const price = await productService.getProductPrice(productId);

  const total = price * quantity;

  return {
    productId,
    quantity,
    total,
  };
}
