import { createOrder } from "./index.js";
import { jest } from "@jest/globals";

describe("create-order", () => {
  beforeEach(() => {});

  it("Should create an order with the correct total", async () => {
    const productService = {
      getProductPrice: jest.fn(async () => 100),
    };

    const result = await createOrder(10, 3, productService);

    expect(result).toEqual({
      productId: 10,
      quantity: 3,
      total: 300,
    });
  });

  it("Should call getProductPrice with the correct product id", async () => {
    const productService = {
      getProductPrice: jest.fn(async () => 100),
    };

    await createOrder(10, 3, productService);

    expect(productService.getProductPrice).toHaveBeenCalledWith(10);
  });

  it("Should return another quantity", async () => {
    const productService = {
      getProductPrice: jest.fn(async () => 100),
    };

    const result = await createOrder(10, 5, productService);

    expect(result).toEqual({
      productId: 10,
      quantity: 5,
      total: 500,
    });
  });

  it("Should return another price", async () => {
    const productService = {
      getProductPrice: jest.fn(async () => 250),
    };

    const result = await createOrder(20, 2, productService);

    expect(result).toEqual({
      productId: 20,
      quantity: 2,
      total: 500,
    });
  });
});
