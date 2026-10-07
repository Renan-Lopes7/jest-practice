import { checkBalance } from "./index.js";
import { jest } from "@jest/globals";

describe("Check balance", () => {
  it("should return the users balance", async () => {
    const bankService = {
      getBalance: jest.fn(async () => 500),
    };

    const result = await checkBalance(10, bankService);
    expect(result).toBe(500);
  });

  it("should return 0 if bankService is 0", async () => {
    const bankService = {
      getBalance: jest.fn(async () => 0),
    };

    const result = await checkBalance(10, bankService);
    expect(result).toBe(0);
  });

  it("should return error if bankService fail", async () => {
    const bankService = {
      getBalance: jest.fn(async () => 0),
    };
    bankService.getBalance.mockRejectedValue(
      new Error("Bank service unavailable"),
    );

    await expect(checkBalance(10, bankService)).rejects.toThrow(
      "Bank service unavailable",
    );
  });
});
