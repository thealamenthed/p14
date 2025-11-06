import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CreateEmployee from "../features/employees/CreateEmployee";
import EmployeeList from "../features/employees/EmployeeList";

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
