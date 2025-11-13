import {createSlice, nanoid} from "@reduxjs/toolkit";

/**
 * Récupère les employés sauvegardés depuis localStorage
 * @type {Array<Object>}
 */
const initial = JSON.parse(localStorage.getItem("employees") || "[]");

/**
 * Slice Redux pour la gestion des employés
 * Gère l'ajout d'employés avec génération automatique d'ID unique
 * @type {import("@reduxjs/toolkit").Slice}
 */
const slice = createSlice({
  name: "employees",
  initialState: {items: initial},
  reducers: {
    /**
     * Action pour ajouter un nouvel employé
     * Génère automatiquement un ID unique avec nanoid()
     * @param {Object} state - L'état actuel du slice
     * @param {Object} action - L'action contenant les données de l'employé
     * @param {Object} action.payload - Les données de l'employé avec un ID généré
     */
    addEmployee: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      /**
       * Préparation de l'action : ajoute un ID unique aux données
       * @param {Object} data - Les données de l'employé (sans ID)
       * @returns {Object} L'action avec payload contenant l'ID généré
       */
      prepare(data) {
        return {payload: {id: nanoid(), ...data}};
      }
    }
  }
});

/**
 * Action exportée pour ajouter un employé
 * @type {Function}
 */
export const {addEmployee} = slice.actions;

/**
 * Reducer exporté pour être utilisé dans le store
 * @type {Function}
 */
export default slice.reducer;
