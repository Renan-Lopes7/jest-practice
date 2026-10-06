import { findProduct } from "./index.js";

describe("Find an product", () => {
  it("Should return an user", () => {
    const products = [
      {
        id: 1,
        name: "Notebook",
        price: 3500,
        active: true,
      },
    ];
    const result = findProduct(products, 1);
    expect(result).toEqual({
      id: 1,
      name: "Notebook",
      price: 3500,
      active: true,
    });
  });

  it("should return null if id not exist", () => {
    const products = [
      {
        id: 1,
        name: "Notebook",
        price: 3500,
        active: true,
      },
    ];
    const result = findProduct(products, 5);
    expect(result).toBeNull();
  });

  it("should return null when the product exist, but is inactive", () => {
    const products = [
      {
        id: 1,
        name: "Notebook",
        price: 3500,
        active: false,
      },
    ];
    const result = findProduct(products, 1);
    expect(result).toBeNull();
  });

  it("should return another product if active", () => {
    const products = [
      {
        id: 1,
        name: "Notebook",
        price: 3500,
        active: true,
      },
      {
        id: 2,
        name: "mouse",
        price: 300,
        active: true,
      },
    ];
    const result = findProduct(products, 2);
    expect(result).toEqual({
      id: 2,
      name: "mouse",
      price: 300,
      active: true,
    });
  });
});
