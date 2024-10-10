import { useState } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import "./App.css";

const isLoggedIn = true;

function App() {
  return <>{isLoggedIn ? <Profile /> : <Login />}</>;
}

export default App;
