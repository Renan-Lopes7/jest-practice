import { emailService, notifyOrder } from "./index.js";
import { jest } from "@jest/globals";

describe("Order notification", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Should return true", () => {
    jest.spyOn(emailService, "sendEmail");
    const result = notifyOrder("name@gmail.com");
    expect(result).toBe(true);
  });

  it("Should call sendEmail once", () => {
    const emailServiceSpy = jest.spyOn(emailService, "sendEmail");
    notifyOrder("name@gmail.com");
    expect(emailServiceSpy).toHaveBeenCalledTimes(1);
  });

  it("Should call sendEmail with email correct", () => {
    const emailServiceSpy = jest.spyOn(emailService, "sendEmail");
    notifyOrder("name@gmail.com");
    expect(emailServiceSpy).toHaveBeenCalledWith("name@gmail.com");
  });
});
