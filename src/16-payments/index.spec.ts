import { makePayment, paymentService } from "./index.js";
import { jest } from "@jest/globals";

describe("Payment", () => {
  it("Should return true after use mockReturnValue", () => {
    jest.spyOn(paymentService, "processPayment").mockReturnValue(false);
    const result = makePayment();
    expect(result).toBe(false);

    jest.restoreAllMocks();

    const result2 = makePayment();
    expect(result2).toBe(true);
  });
});
