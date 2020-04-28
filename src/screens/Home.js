fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  .then( res => res.json() )
  .then( data => {
    data.drinks.map( el => {
      initialStore.filters.push({
        enable: true,
        title: el.strCategory
      });
    });
    console.log( initialStore )
  });

console.log( initialStore );