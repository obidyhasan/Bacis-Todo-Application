import { Link } from "react-router";
import todoIcon from "./../../assets/to-do-list.png";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between gap-3 max-w-6xl mx-auto px-4 py-2">
      <div className="flex items-center gap-3">
        <img className="w-10" src={todoIcon} alt="" />
        <h1 className="text-2xl">
          <span className="font-bold">Todo</span>Master
        </h1>
      </div>
      <div className="text-base  space-x-3">
        <Link to={"/tasks"}>Tasks</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
