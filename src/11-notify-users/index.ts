export const notificationService = {
  sendNotification(email: string): void {
    console.log(`Notificação enviada para ${email}`);
  },
};

export function notifyUsers(emails: string[]): void {
  emails.forEach((email) => {
    notificationService.sendNotification(email);
  });
}
