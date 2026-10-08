import { emailService, sendWelcomeEmail } from "./index.js";
import { jest } from "@jest/globals";

describe("Clear mock", () => {
  it("Should call once sendWelcomeEmail", () => {
    const emailServiceSpy = jest.spyOn(emailService, "sendEmail");

    sendWelcomeEmail("joao@gmail.com");

    expect(emailServiceSpy).toHaveBeenCalledTimes(1);
    emailServiceSpy.mockClear();

    sendWelcomeEmail("Maria@gmail.com");
    expect(emailServiceSpy).toHaveBeenCalledTimes(1);
  });
});
