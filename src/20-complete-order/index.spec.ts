import { completeOrder } from "./index.js";
import { jest } from "@jest/globals";

describe("Order service", () => {
  it("Should return true if payment approved", async () => {
    const paymentServiceFn = {
      processPayment: jest.fn(async () => true),
    };
    const notificationServiceFn = {
      sendConfirmation: jest.fn(),
    };
    const result = await completeOrder(
      100,
      2,
      "name@gmail.com",
      paymentServiceFn,
      notificationServiceFn,
    );
    expect(notificationServiceFn.sendConfirmation).toHaveBeenCalledWith(
      "name@gmail.com",
    );
    expect(result).toBe(true);
  });

  it("Should return false if payment refuse", async () => {
    const paymentServiceFn = {
      processPayment: jest.fn(async () => false),
    };
    const notificationServiceFn = {
      sendConfirmation: jest.fn(),
    };
    const result = await completeOrder(
      100,
      2,
      "name@gmail.com",
      paymentServiceFn,
      notificationServiceFn,
    );
    expect(result).toBe(false);
    expect(notificationServiceFn.sendConfirmation).not.toHaveBeenCalled();
  });

  it("Should verify if processPayment is correct", async () => {
    const paymentServiceFn = {
      processPayment: jest.fn(async () => true),
    };
    const notificationServiceFn = {
      sendConfirmation: jest.fn(),
    };
    await completeOrder(
      100,
      2,
      "name@gmail.com",
      paymentServiceFn,
      notificationServiceFn,
    );
    expect(paymentServiceFn.processPayment).toHaveBeenCalledWith(200);
  });

  it("Should throw an error if total is 0", async () => {
    const paymentServiceFn = {
      processPayment: jest.fn(async () => true),
    };
    const notificationServiceFn = {
      sendConfirmation: jest.fn(),
    };

    await expect(
      completeOrder(
        0,
        2,
        "name@gmail.com",
        paymentServiceFn,
        notificationServiceFn,
      ),
    ).rejects.toThrow("Invalid order total");
  });

  it("Should throw an error if quantity is 0", async () => {
    const paymentServiceFn = {
      processPayment: jest.fn(async () => true),
    };
    const notificationServiceFn = {
      sendConfirmation: jest.fn(),
    };

    await expect(
      completeOrder(
        100,
        0,
        "name@gmail.com",
        paymentServiceFn,
        notificationServiceFn,
      ),
    ).rejects.toThrow("Invalid order total");
  });
});
