import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiBaseUrl } from "../api/api";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [userImg, setUserImg] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  function handleSignUp(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("password", password);
    formData.set("userImg", userImg, "originalname");
    fetch(`${apiBaseUrl}/users/register`, {
      method: "POST",

      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.err) {
          console.log(result.err);
          return setErrorMessage(result.err);
        }
        setSuccess("account created successfuly, please login");
        setErrorMessage("");
        setName("");
        setEmail("");
        setPassword("");
        navigate("/login");
      });
  }

  return (
    <div className="signUp">
      <h1>Sign Up</h1>
      <form>
        <div className="formContent">
          <label htmlFor="name">NAME</label>
          <input
            type="email"
            name="name"
            id="name"
            placeholder="Full Name"
            min="5"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

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

          <label htmlFor="picture">PROFILE PICTURE</label>
          <input
            type="file"
            name="picture"
            id="picture"
            onChange={(e) => setUserImg(e.target.files[0])}
          />

          <button onClick={handleSignUp}>Sign Up</button>
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        {success && <p>{success}</p>}
      </form>
      <p>
        Already Have An Account? <Link to="/login">Log In</Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
