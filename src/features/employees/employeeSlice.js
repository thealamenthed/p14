import {createSlice, nanoid} from "@reduxjs/toolkit";

const initial = JSON.parse(localStorage.getItem("employees") || "[]");

const slice = createSlice({
  name: "employees",
  initialState: {items: initial},
  reducers: {
    addEmployee: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(data) {
        return {payload: {id: nanoid(), ...data}};
      }
    }
  }
});

export const {addEmployee} = slice.actions;
export default slice.reducer;
