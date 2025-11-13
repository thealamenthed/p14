import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CreateEmployee from "../features/employees/CreateEmployee";
import EmployeeList from "../features/employees/EmployeeList";

/**
 * Configuration du router React Router
 * Définit les routes de l'application :
 * - "/" : Page de création d'employé (route par défaut)
 * - "/employees" : Liste des employés
 * @type {import("react-router-dom").Router}
 */
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <CreateEmployee />},
      {path: "employees", element: <EmployeeList />}
    ]
  }
]);
