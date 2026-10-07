import { discountService, getFinalPrice } from "./index.js";
import { jest } from "@jest/globals";

describe("Final price", () => {
  it("Should return with discount", () => {
    const result = getFinalPrice(100, discountService);
    expect(result).toBe(90);
  });

  it("Should return price correct", () => {
    const discountServiceSpy = jest.spyOn(discountService, "calculateDiscount");
    getFinalPrice(500, discountService);
    expect(discountServiceSpy).toHaveBeenCalledWith(500);
  });

  it("Should change discount behavior", () => {
    const discountServiceSpy = jest.spyOn(discountService, "calculateDiscount");

    discountServiceSpy.mockImplementation(() => 50);

    const result = getFinalPrice(100, discountService);
    expect(result).toBe(50);
  });
});
