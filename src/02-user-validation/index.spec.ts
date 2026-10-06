import { validateUser } from "./index.js";

describe("Validate an user", () => {
  it("Should return true if name and email are valid ", () => {
    const result = validateUser("name", "name@gmail.com");
    expect(result).toBe(true);
  });

  it("Should throw error if name is required", () => {
    expect(() => {
      validateUser("", "name@gmail.com");
    }).toThrow("Name is required");
  });

  it("Should be throw an error id name has less than 3 characters", () => {
    expect(() => {
      validateUser("nr", "name@gmail.com");
    }).toThrow("Name must have at least 3 characters");
  });

  it("Should throw an error if email is invalid", () => {
    expect(() => {
      validateUser("name", "name.gmail.com");
    }).toThrow("Invalid email");
  });

  it("Should throw an error if email is empty", () => {
    expect(() => {
      validateUser("name", "");
    }).toThrow("Invalid email");
  });
});
