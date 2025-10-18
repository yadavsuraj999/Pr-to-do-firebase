import { useState } from "react";
import { CheckSquare, LogOut, Menu, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { handleLogOut } from "../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => pathname === path;

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <CheckSquare className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-xl font-semibold text-gray-800 tracking-wide">
            TaskFlow
          </span>
        </div>

        <button
          className="sm:hidden p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${menuOpen
            ? "absolute top-16 left-0 w-full bg-white border-t border-gray-700 sm:static sm:w-auto sm:border-none"
            : "hidden sm:flex"
            } flex flex-col sm:flex-row sm:items-center sm:space-x-2`}
        >
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-md transition-all duration-200 ${isActive("/")
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:bg-blue-100 hover:text-blue-800"
              }`}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/seetask"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-md transition-all duration-200 ${isActive("/seetask")
              ? "bg-green-600 text-white"
              : "text-gray-600 hover:bg-green-100 hover:text-green-800"
              }`}
          >
            <span>See Tasks</span>
          </Link>

          <Link
            to="/addtask"
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-md transition-all duration-200 ${isActive("/addtask")
              ? "bg-purple-600 text-white"
              : "text-gray-600 hover:bg-purple-100 hover:text-purple-800"
              }`}
          >
            <span>Add Task</span>
          </Link>

          <button
            onClick={() => {
              dispatch(handleLogOut());
              setMenuOpen(false);
            }}
            className={`flex items-center gap-2 px-4 py-2 font-medium text-sm rounded-md transition-all duration-200 ${isActive("/logout")
              ? "bg-red-600 text-white"
              : "text-gray-600 hover:bg-red-100 hover:text-red-800"
              }`}
          >
            <LogOut className="w-4 h-4 text-red-600" />
            <span>Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
