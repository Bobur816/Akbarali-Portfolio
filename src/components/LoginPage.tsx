import { useState } from "react";
import { useLogin } from "../authentication/useLogin";

const LoginPage = () => {
  const [email, setEmail] = useState("aliakbarxasanov2000@gmail.com");
  const [password, setPassword] = useState("akbarali_+admin");
  const { login, isLoading } = useLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <div className="login">
      <div className="login-layout">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            disabled={isLoading}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            disabled={isLoading}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={isLoading} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
