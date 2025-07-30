import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}