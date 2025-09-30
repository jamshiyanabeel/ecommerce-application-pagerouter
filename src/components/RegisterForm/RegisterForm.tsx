// components/RegisterForm.tsx
"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="container">
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input className="form-control" 
            type="text"
            placeholder="Username"
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
      <button className="btn btn-primary" type="submit">Continue</button>
    </form>
    <p className="mt-3">By continuing, you agree to Quickart's <button type="button" className="btn btn-link" onClick={() => router.replace(`/terms-of-use`)}>Conditions of Use</button> and <button type="button" className="btn btn-link" onClick={() => router.push(`/privacy-policy`)}>Privacy Notice</button>.</p>

    <a href="#">Need help?</a>
    </div>
  );
}
