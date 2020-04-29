import { createReducer } from '@reduxjs/toolkit';

const initialStore = {
  categories: [],
  drinks: []
};

export default createReducer( initialStore , {
  INIT_CATEGORIES : (state, {payload}) => {
    state.categories = payload; 
    state.drinks = [];
  },
  UPDATE_CATEGORY : (state, {payload}) => {
    const { id, drinks } = payload;
    state.categories[id].displayed = true;
    state.drinks = state.drinks.concat(drinks);
  },
  ADD_DRINKS : (state, {payload}) => {
    state.drinks = state.drinks.concat(payload);
  },
  CLEAR_DRINKS : (state) => {
    state.drinks = []
  }
});