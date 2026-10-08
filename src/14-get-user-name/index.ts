type UserService = {
  findUser: (id: number) => Promise<string>;
};

export async function getUserName(
  id: number,
  userService: UserService,
): Promise<string> {
  return await userService.findUser(id);
}
