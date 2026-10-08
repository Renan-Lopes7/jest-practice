type PaymentService = {
  processPayment: (amount: number) => Promise<boolean>;
};

type NotificationService = {
  sendConfirmation: (email: string) => void;
};

export async function completeOrder(
  price: number,
  quantity: number,
  email: string,
  paymentService: PaymentService,
  notificationService: NotificationService,
): Promise<boolean> {
  const total = price * quantity;

  if (total <= 0) {
    throw new Error("Invalid order total");
  }

  const paymentApproved = await paymentService.processPayment(total);

  if (!paymentApproved) {
    return false;
  }

  notificationService.sendConfirmation(email);

  return true;
}
