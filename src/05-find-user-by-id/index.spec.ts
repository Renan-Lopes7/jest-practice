import { findUserById, users } from "./index.js";

describe("Find user by id", () => {
  it("should return user if exist", async () => {
    const result = findUserById(1);
    await expect(result).resolves.toEqual(users[0]);
  });

  it("should throw error if user not exist", async () => {
    const result = findUserById(9);
    await expect(result).rejects.toThrow("User not found");
  });

  it("should return another user with another id", async () => {
    const result = findUserById(3);
    await expect(result).resolves.toEqual(users[2]);
  });
});
