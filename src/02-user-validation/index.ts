export function validateUser(name: string, email: string): boolean {
  if (!name) {
    throw new Error("Name is required");
  }
  if (name.length < 3) {
    throw new Error("Name must have at least 3 characters");
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email");
  }
  return true;
}
