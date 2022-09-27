import React, { useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import { updateProfile } from "@firebase/auth";

function App() {
  const user = authService.currentUser;
  console.log(user);
  const [isLoggedIn, setIsLoggedIn] = useState(user);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Nwitter</footer>
    </>
  );
}

export default App;
