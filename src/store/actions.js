export function initCategories(payload){
  return {
    type: 'INIT_CATEGORIES',
    payload
  };
};

export function updateCategory(payload){
  return {
    type: 'UPDATE_CATEGORY',
    payload
  };
};

export function addDrinks(payload){
  return {
    type: 'ADD_DRINKS',
    payload
  };
};

export function clearDrinks(){
  return {
    type: 'CLEAR_DRINKS',
    payload: false
  };
};