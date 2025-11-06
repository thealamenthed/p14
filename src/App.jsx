import "./style/index.css";
import {Outlet, NavLink} from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-semibold">HRnet</h1>
          <nav className="flex gap-4">
            <NavLink to="/" className={({isActive}) => (isActive ? "text-indigo-600 font-medium" : "text-gray-700 hover:text-indigo-600")}>
              Create Employee
            </NavLink>
            <NavLink to="/employees" className={({isActive}) => (isActive ? "text-indigo-600 font-medium" : "text-gray-700 hover:text-indigo-600")}>
              Employee List
            </NavLink>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
