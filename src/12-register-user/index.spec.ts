import { emailService, registerUser } from "./index.js";
import { jest } from "@jest/globals";

describe("Register user", () => {
  it("Should call sendWelcomeEmail", () => {
    const emailServiceSpy = jest.spyOn(emailService, "sendWelcomeEmail");

    registerUser("name@gmail.com");
    expect(emailServiceSpy).toHaveBeenCalled();
  });

  it("Should return true", () => {
    const result = registerUser("name@gmail.com");
    expect(result).toBe(true);
  });

  it("Should call with email correct", () => {
    const emailServiceSpy = jest.spyOn(emailService, "sendWelcomeEmail");

    registerUser("name@gmail.com");
    expect(emailServiceSpy).toHaveBeenCalledWith("name@gmail.com");
  });
});
