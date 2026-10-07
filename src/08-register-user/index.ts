export const notificationService = {
  sendEmail(email: string, message: string): boolean {
    console.log(`Enviando e-mail para ${email}: ${message}`);
    return true;
  },
};

export function registerUser(email: string): boolean {
  notificationService.sendEmail(email, "User registered with success");
  return true;
}
