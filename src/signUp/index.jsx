import { useState } from "react";
import Cookies from 'js-cookie';

import { Link, useNavigate } from "react-router-dom";
import "./index.css"

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUpForm = async (e) => {
    e.preventDefault(); // 

    const formData = { email, username, password };

    const api = "https://mytodo-backend-69lo.onrender.com/api/register"; 

    try {
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); 

      if (!response.ok) {
        setError(data.msg || "Registration failed");
        return;
      }

      if (data.token) {
        Cookies.set("token", data.token, { expires: 1 });
      }

  
      navigate("/signin");
    } catch (err) {
      console.error("Error:", err);
      setError("Something went wrong");
    }
  };

  return (
    <div className="bg-container">
    <form onSubmit={handleSignUpForm} className="form-container">
      <h1 className="heading">SIGN UP</h1>

      <div className="input-container">

      <label className="label" htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
        className="input1"
      />

      <label htmlFor="username" className="label">Username:</label>
      <input
        type="text"
        id="username"
        placeholder="Enter Your Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        required
        className="input1"
      />

      <label className="label" htmlFor="pass">Password:</label>
      <input
      className="input1"
        type="password"
        id="pass"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />

</div>

      <div className="btn">
        <button type="submit"  className="signinbtn">SIGN UP</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>

      <div>
        <p className="para">
          Already have an account? <Link to="/signin" className="signin">SIGN IN</Link>
        </p>
      </div>
    </form>
    </div>
  );
};

export default SignUp;
