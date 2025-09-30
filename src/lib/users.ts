// lib/users.ts
export interface User {
  username: string;
  password: string; // In real apps, store a hashed password
}

export const users: User[] = [
  { username: "admin", password: "admin123" }, { username: "user", password: "user123" }
];

// Add new user
export function addUser(user: User) {
  users.push(user);
}

// Find user
export function findUser(username: string) {
  return users.find((u) => u.username === username);
}
