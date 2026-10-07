import { notificationService, notifyUsers } from "./index.js";
import { jest } from "@jest/globals";

describe("Notify users", () => {
  it("Should call notification 3 times", () => {
    const notificationServiceSpy = jest.spyOn(
      notificationService,
      "sendNotification",
    );
    notifyUsers(["name@gmail.com", "test@gmail.com", "test2@gmail.com"]);
    expect(notificationServiceSpy).toHaveBeenCalledTimes(3);
  });

  it("Should call notification once", () => {
    const notificationServiceSpy = jest.spyOn(
      notificationService,
      "sendNotification",
    );
    notifyUsers(["name@gmail.com"]);
    expect(notificationServiceSpy).toHaveBeenCalledTimes(1);
  });

  it("Should not call notification when email list is empty", () => {
    const notificationServiceSpy = jest.spyOn(
      notificationService,
      "sendNotification",
    );
    notifyUsers([]);
    expect(notificationServiceSpy).toHaveBeenCalledTimes(0);
  });
});
