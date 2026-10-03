type User = {
  id: number;
  name: string;
  email: string;
  active: boolean;
};

export function findActiveUser(users: User[], email: string): User | null {
  const user = users.find((user) => user.email === email && user.active);

  return user ?? null;
}
