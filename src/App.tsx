import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
