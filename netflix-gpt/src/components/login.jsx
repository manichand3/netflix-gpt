import React, { useState } from "react";
import Header from "./header";
import "../styles/login.css"; // Ensure to import your CSS file

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true); // Updated state name for clarity
  const toggle = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <>
      <Header />
      <div className="background-container">
        <img
          className="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/74d734ca-0eab-4cd9-871f-bca01823d872/web/IN-en-20241021-TRIFECTA-perspective_2277eb50-9da3-4fdf-adbe-74db0e9ee2cf_large.jpg"
          alt="Background"
        />
        <div className="form-container">
          <p>{isSignUp ? "Sign-up" : "Sign-in"}</p>
          <form>
            {isSignUp && (
              <input
                type="text"
                placeholder="User-Name"
                aria-label="User Name"
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <input
              type="password"
              placeholder="Password"
              aria-label="Password"
              required
            />
            <button type="submit">{isSignUp ? "Sign-up" : "Sign-in"}</button>
          </form>
          <p onClick={toggle} className="toggle-text">
            {isSignUp ? "Already a user? Sign-in" : "New user? Sign-up"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
