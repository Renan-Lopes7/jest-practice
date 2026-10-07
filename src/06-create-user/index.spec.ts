import { createUser, users } from "./index.js";

describe("Create user", () => {
  beforeEach(() => {
    users.length = 0;
  });

  it("should create e newUser", () => {
    const result = createUser("name", "name@gmail.com");
    expect(result).toEqual({
      id: 1,
      name: "name",
      email: "name@gmail.com",
    });
  });

  it("should throw error if name is empty", () => {
    expect(() => createUser("", "name@gmail.com")).toThrow("Name is required");
  });

  it("should throw error if email is empty", () => {
    expect(() => createUser("name", "")).toThrow("E-mail is required");
  });

  it("should throw error if email is invalid", () => {
    expect(() => createUser("name", "name.com.com")).toThrow("Invalid email");
  });

  it("should increment user id", () => {
    const firstUser = createUser("João", "joao@gmail.com");
    const secondUser = createUser("Maria", "maria@gmail.com");

    expect(firstUser.id).toBe(1);
    expect(secondUser.id).toBe(2);
  });
});
