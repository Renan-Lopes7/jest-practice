export const userService = {
  isUserActive(userId: number): boolean {
    return true;
  },
};

export function canAccess(userId: number): boolean {
  return userService.isUserActive(userId);
}
