import { calculateOrderTotal } from "./index.js";

describe("Calculate order total", () => {
  it("should return order total", () => {
    const items = [
      {
        name: "Notebook",
        price: 3500,
        quantity: 1,
      },
      {
        name: "Mouse",
        price: 100,
        quantity: 2,
      },
    ];
    const result = calculateOrderTotal(items);
    expect(result).toBe(3700);
  });

  it("should return result 0 if valor the quantity equal 0 ", () => {
    const items = [
      {
        name: "Notebook",
        price: 3500,
        quantity: 0,
      },
      {
        name: "Mouse",
        price: 100,
        quantity: 2,
      },
    ];
    const result = calculateOrderTotal(items);
    expect(result).toBe(200);
  });

  it("should return 0 for an empty items array", () => {
    expect(calculateOrderTotal([])).toBe(0);
  });

  it("should calculate total for one item", () => {
    const items = [
      {
        name: "Notebook",
        price: 3500,
        quantity: 2,
      },
    ];

    const result = calculateOrderTotal(items);
    expect(result).toBe(7000);
  });

  it("should calculate total with different quantities", () => {
    const items = [
      {
        name: "Notebook",
        price: 3500,
        quantity: 1,
      },
      {
        name: "monitor",
        price: 3000,
        quantity: 1,
      },
      {
        name: "Mouse",
        price: 100,
        quantity: 1,
      },
      {
        name: "keyboard",
        price: 200,
        quantity: 1,
      },
    ];

    const result = calculateOrderTotal(items);
    expect(result).toBe(6800);
  });
});
