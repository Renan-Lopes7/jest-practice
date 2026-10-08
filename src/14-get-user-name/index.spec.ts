import { getUserName } from "./index.js";
import { jest } from "@jest/globals";

describe("Get user name", () => {
  it("Should return user", async () => {
    const UserService = {
      findUser: jest.fn(async () => "Joāo"),
    };

    const result = await getUserName(10, UserService);
    expect(result).toBe("Joāo");
  });

  it("Should return user correct", async () => {
    const userService = {
      findUser: jest.fn(async () => "Maria"),
    };

    const result = await getUserName(10, userService);
    expect(result).toBe("Maria");
  });

  it("Should return user ID correct", async () => {
    const userService = {
      findUser: jest.fn(async () => "joão "),
    };

    await getUserName(10, userService);
    expect(userService.findUser).toHaveBeenCalledWith(10);
  });
});
