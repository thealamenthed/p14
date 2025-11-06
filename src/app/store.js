import {configureStore} from "@reduxjs/toolkit";
import employeesReducer from "../features/employees/employeeSlice";

export const store = configureStore({
  reducer: {employees: employeesReducer}
});

// Persistance locale (mimique de l'app jQuery)
store.subscribe(() => {
  const items = store.getState().employees.items;
  localStorage.setItem("employees", JSON.stringify(items));
});
