export const emailService = {
  sendEmail(email: string): void {
    console.log(`Email enviado para ${email}`);
  },
};

export function sendWelcomeEmail(email: string): void {
  emailService.sendEmail(email);
}
