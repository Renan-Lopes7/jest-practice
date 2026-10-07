type BankService = {
  getBalance: (userId: number) => Promise<number>;
};

export async function checkBalance(
  userId: number,
  bankService: BankService,
): Promise<number> {
  const balance = await bankService.getBalance(userId);

  return balance;
}
