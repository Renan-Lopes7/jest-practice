export const paymentService = {
  processPayment(): boolean {
    return true;
  },
};

export function makePayment(): boolean {
  return paymentService.processPayment();
}
