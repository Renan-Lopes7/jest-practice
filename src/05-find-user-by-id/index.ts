type User = {
  id: number;
  name: string;
  email: string;
};

export const users: User[] = [
  {
    id: 1,
    name: "João",
    email: "joao@email.com",
  },
  {
    id: 2,
    name: "Maria",
    email: "maria@email.com",
  },
  {
    id: 3,
    name: "julio",
    email: "julio@email.com",
  },
];

export async function findUserById(id: number): Promise<User> {
  const user = await users.find((user) => user.id === id);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
