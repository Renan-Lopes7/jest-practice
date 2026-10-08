import { calculateFinalPrice } from "./index.js";

describe("Order discount", () => {
  it("Should return value no discount applied", () => {
    const result = calculateFinalPrice(100, 2);
    expect(result).toBe(200);
  });

  it("Should return a value  with discount applied", () => {
    const result = calculateFinalPrice(250, 2);
    expect(result).toBe(450);
  });

  it("Should return a total above 500 with discount applied", () => {
    const result = calculateFinalPrice(400, 2);
    expect(result).toBe(720);
  });

  it("Should return all products using quantity", () => {
    const result = calculateFinalPrice(100, 10);
    expect(result).toBe(900);
  });
});
