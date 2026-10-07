type User = {
  id: number;
  name: string;
  email: string;
};

export const users: User[] = [];
export function createUser(name: string, email: string): User {
  if (!name) {
    throw new Error("Name is required");
  }
  if (email.length === 0) {
    throw new Error("E-mail is required");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);

  return newUser;
}
