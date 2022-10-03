import { async } from "@firebase/util";
import { authService } from "fbase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const auth = getAuth();

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

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        //Create Account
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        //Sign in Account
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

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
          autoComplete="on"
          required
        />
        <input type="submit" value={newAccount ? "회원가입" : "로그인"} />
      </form>
      <span onClick={toggleAccount}>{newAccount ? "로그인" : "회원가입"}</span>
      <p>{error}</p>
      <button>Continue with Google</button>
      <button>Continue with Github</button>
    </div>
  );
};
export default Auth;
