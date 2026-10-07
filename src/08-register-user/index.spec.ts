import { notificationService, registerUser } from "./index.js";
import { jest } from "@jest/globals";

describe("register-user", () => {
  it("Should to send email and message", () => {
    const sendEmailSpy = jest.spyOn(notificationService, "sendEmail");

    registerUser("name@gmail.com");

    expect(sendEmailSpy).toHaveBeenCalledWith(
      "name@gmail.com",
      "User registered with success",
    );
  });

  it("Should return true", () => {
    const result = registerUser("name@gmail.com");
    expect(result).toBe(true);
  });
});
