import {configureStore} from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeeSlice";

/**
 * Store Redux configuré avec Redux Toolkit
 * Contient le reducer des employés et persiste automatiquement les données dans localStorage
 * @type {import("@reduxjs/toolkit").EnhancedStore}
 */
export const store = configureStore({
  reducer: {employees: employeesReducer}
});

/**
 * Abonnement au store pour persister les employés dans localStorage
 * Sauvegarde automatiquement les données à chaque modification du state
 */
store.subscribe(() => {
  const items = store.getState().employees.items;
  localStorage.setItem("employees", JSON.stringify(items));
});
