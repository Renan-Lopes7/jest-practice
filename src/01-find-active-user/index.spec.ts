import { findActiveUser } from "./index.js";

describe("findActiveUser", () => {
  it("Should find an active user", () => {
    const users = [
      {
        id: 1,
        name: "João",
        email: "joao@email.com",
        active: true,
      },
      {
        id: 2,
        name: "Maria",
        email: "maria@email.com",
        active: true,
      },
    ];

    const result = findActiveUser(users, "joao@email.com");
    expect(result).toEqual(users[0]);
  });
  it("Should return null if user is not found", () => {
    const users = [
      {
        id: 1,
        name: "João",
        email: "joao@email.com",
        active: true,
      },
      {
        id: 2,
        name: "Maria",
        email: "maria@email.com",
        active: true,
      },
    ];

    const result = findActiveUser(users, "pedro@email.com");
    expect(result).toBeNull();
  });

  it("Should return null if user is inactive ", () => {
    const users = [
      {
        id: 3,
        name: "Pedro",
        email: "pedro@email.com",
        active: false,
      },
    ];

    const result = findActiveUser(users, "pedro@email.com");
    expect(result).toBeNull();
  });

  it("Should return the correct user object", () => {
    const users = [
      {
        id: 3,
        name: "Pedro",
        email: "pedro@email.com",
        active: true,
      },
    ];

    const result = findActiveUser(users, "pedro@email.com");
    expect(result).toEqual({
      id: 3,
      name: "Pedro",
      email: "pedro@email.com",
      active: true,
    });
  });
});
