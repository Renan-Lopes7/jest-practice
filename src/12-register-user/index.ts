export const emailService = {
  sendWelcomeEmail(email: string): void {
    console.log(`Welcome email sent to ${email}`);
  },
};

export function registerUser(email: string): boolean {
  emailService.sendWelcomeEmail(email);

  return true;
}
