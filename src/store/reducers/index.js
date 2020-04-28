import { createReducer } from '@reduxjs/toolkit';

const initialStore = {
  categories: []
};

export default createReducer( initialStore , {
  ADD_CATEGORY : (state, payload) => {
    const { title } = payload;
    state.categories.push({
      enable: true,
      title
    });
  }
});