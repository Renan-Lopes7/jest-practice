import { createOrder } from "./index.js";
import { jest } from "@jest/globals";

describe("Order service", () => {
  it("Should return true if payment approved", async () => {
    const paymentService = {
      processPayment: jest.fn(async () => true),
    };
    const result = await createOrder(100, 2, paymentService);
    expect(result).toBe(true);
  });

  it("Should return false if payment refuse", async () => {
    const paymentService = {
      processPayment: jest.fn(async () => false),
    };
    const result = await createOrder(100, 2, paymentService);
    expect(result).toBe(false);
  });

  it("Should verify if processPayment received the correct total amount ", async () => {
    const paymentServicefn = {
      processPayment: jest.fn(async () => true),
    };
    await createOrder(100, 2, paymentServicefn);
    expect(paymentServicefn.processPayment).toHaveBeenCalledWith(200);
  });

  it("Should throw error if price is 0 ", async () => {
    const paymentServicefn = {
      processPayment: jest.fn(async () => true),
    };

    await expect(createOrder(0, 2, paymentServicefn)).rejects.toThrow(
      "Invalid order total",
    );
  });

  it("Should throw error if quantity is 0 ", async () => {
    const paymentServicefn = {
      processPayment: jest.fn(async () => true),
    };

    await expect(createOrder(100, 0, paymentServicefn)).rejects.toThrow(
      "Invalid order total",
    );
  });
});
