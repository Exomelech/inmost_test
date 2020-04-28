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