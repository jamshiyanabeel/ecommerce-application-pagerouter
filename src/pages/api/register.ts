
import { addUser, findUser } from "@/lib/users";
import type { NextApiRequest, NextApiResponse } from "next";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  if (findUser(username)) {
    return res.status(400).json({ error: "User already exists" });
  }

  addUser({ username, password });

  return res.status(200).json({ message: "User registered successfully" });
}


