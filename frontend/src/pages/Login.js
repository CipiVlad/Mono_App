import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api/api";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  function handleLogIn(e) {
    e.preventDefault();

    fetch(`${apiBaseUrl}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
      //   credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.message);
        if (result.message) {
          return setErrorMessage(result.message);
        }

        console.log(result.accessToken);
        setToken(result.accessToken);
        navigate("/home");
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <img src="" alt="the määään" />
      <form>
        <label htmlFor="email">EMAIL</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          min="5"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          min="8"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogIn}>Login</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>

      <p>
        Have No Account? <Link to="/signup">Sign Up</Link>{" "}
      </p>
    </div>
  );
};

export default Login;
