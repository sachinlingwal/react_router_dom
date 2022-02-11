import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";

const Login = () => {
  const [user, setUser] = useState("");

  const auth = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const redirectPath = location.state?.path || "/";
  console.log(redirectPath);

  const handleLogin = () => {
    auth.login(user);
    // navigate("/", { replace: true });
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <label>
        username
        <input
          type="text"
          onChange={(e) => setUser(e.target.value)}
          value={user}
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
