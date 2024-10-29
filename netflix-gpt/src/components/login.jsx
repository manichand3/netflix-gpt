import React, { useRef, useState } from "react";
import Header from "./header";
import "../styles/login.css"; // Ensure to import your CSS file
import { validationCheck } from "../utils/validationCheck";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggle = () => {
    setIsSignUp(!isSignUp);
    setErrorMessage(null); // Clear error message on toggle
  };

  const handleValidation = (event) => {
    event.preventDefault(); // Prevent default form submission
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const valid = validationCheck(emailValue, passwordValue);
    setErrorMessage(valid);
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
              ref={email}
              type="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              aria-label="Password"
              required
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button onClick={handleValidation} type="submit">
              {isSignUp ? "Sign-up" : "Sign-in"}
            </button>
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
