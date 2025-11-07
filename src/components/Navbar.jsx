import {NavLink} from "react-router-dom";

export default function Navbar() {
  return (
    <header className="border-b bg-white shadow-sm">
      <div className="mx-auto max-w-5xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-indigo-600">HRnet</h1>
            <span className="text-shadow-xs text-gray-500 hidden sm:inline">Employee Management System</span>
          </div>
          <nav className="flex gap-1">
            <NavLink
              to="/"
              className={({isActive}) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`
              }>
              Create Employee
            </NavLink>
            <NavLink
              to="/employees"
              className={({isActive}) =>
                `px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? "bg-indigo-100 text-indigo-700" : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600"
                }`
              }>
              Employee List
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
