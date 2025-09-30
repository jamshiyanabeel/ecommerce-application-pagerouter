// components/LoginForm.tsx
"use client";
import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="container">
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <input className="form-control" type="text" placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>

      <div className="mb-3">
        <input className="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit">Login</button>
    </form>
    </div>
    
  );
}
