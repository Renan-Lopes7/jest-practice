export const emailService = {
  sendEmail(email: string): void {
    console.log(`Email enviado para ${email}`);
  },
};

export function notifyOrder(email: string): boolean {
  emailService.sendEmail(email);

  return true;
}
