import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          name="email"
          value={email}
          type="text"
          placeholder="Email"
          required
        />
        <input
          onChange={onChange}
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          required
        />
        <input type="submit" value="Log in" />
      </form>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  );
};
export default Auth;
