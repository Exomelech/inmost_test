import { createReducer } from '@reduxjs/toolkit';

const initialStore = {
  categories: []
};

export default createReducer( initialStore , {
  INIT_CATEGORIES : (state, {payload}) => {
    state.categories = payload; 
  }
});