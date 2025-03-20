(async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return data;
})
().then((data) =>{

  data.recipies?.forEach((recipe) => {
    console.log(recipe.userId);
  })
})






