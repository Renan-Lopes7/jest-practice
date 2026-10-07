import { canAccess, userService } from "./index.js";
import { jest } from "@jest/globals";

describe("User access", () => {
  it("should check if the ID is being called correctly", () => {
    const isUserActiveSpy = jest.spyOn(userService, "isUserActive");
    canAccess(10);
    expect(isUserActiveSpy).toHaveBeenCalledWith(10);
  });

  it("Should return true if user active", () => {
    const result = canAccess(10);

    expect(result).toBe(true);
  });

  it("Should return false if user inactive", () => {
    const isUserActiveSpy = jest.spyOn(userService, "isUserActive");
    isUserActiveSpy.mockReturnValue(false);

    const result = canAccess(10);
    expect(result).toBe(false);
  });
});
