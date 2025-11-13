import "./style/index.css";
import {Outlet} from "react-router-dom";
import Navbar from "./components/Navbar";

/**
 * Composant App - Composant racine de l'application
 * Contient la structure de base : Navbar et zone de contenu principal
 * @returns {JSX.Element} La structure principale de l'application avec navigation et contenu
 */
export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
