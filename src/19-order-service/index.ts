type PaymentService = {
  processPayment: (amount: number) => Promise<boolean>;
};

export async function createOrder(
  price: number,
  quantity: number,
  paymentService: PaymentService,
): Promise<boolean> {
  const total = price * quantity;

  if (total <= 0) {
    throw new Error("Invalid order total");
  }

  const paymentApproved = await paymentService.processPayment(total);

  if (!paymentApproved) {
    return false;
  }

  return true;
}
