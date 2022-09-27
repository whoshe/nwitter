import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
