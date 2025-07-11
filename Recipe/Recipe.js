const srch_input = document.getElementById("srch-input");
const srch_btn = document.getElementById("srch-btn");
const loading = document.querySelector(".loading");
const recipe_content = document.querySelector(".recipe-content");
const recipe_icon = document.querySelector(".recipe-icon");
const recipe_error = document.getElementsByClassName("recipe-error");


const searchRecipe = async (query) =>{//"query" is not a specific name you can also type somthing else but make sure that you paste or type the  name also in the url of api  as I write it in 11 line ${query} like this..
   loading.innerHTML = "<h2>Fetching the recipes...</h2>";
  const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
  //fetch API ko call kre gha ke jo apne ne seachbox me type kia hai ,wo API ko bhej raha hai (Fetch is like a messenger)
  //await means: "Wait here until the website sends data."
  try {
    const response = await data.json();//json change the raw data into JavaScript object
  console.log(response.meals[0]);//show the first meal form the list
  loading.innerHTML = "";//as list appears so the line "Fetching the recipes..." disapear.S
response.meals.forEach(meal => {//response.meals is a list of all the recipes
  const recipeDiv = document.createElement('div');//this make a new <div/> element.
  recipeDiv.classList.add('recipe');//it gives a div name 'recipe'
  recipeDiv.innerHTML = `
  <img src="${meal.strMealThumb}">
  <h2>${meal.strMeal}</h2> 
  <h3>${meal.strArea}</h3> 
  <p>belongs to <span>${meal.strCategory}</span> Category</p>
  `//this put images inside a div and that images comes from mealDB api
  const button = document.createElement('button');
  button.textContent = "Click to see recipe..";
  recipeDiv.appendChild(button);//"button" is inside the div made by recipediv inside the javascript at line 19 named"recipe"
  // Adding Event Listener to recipe button 
  button.addEventListener('click' , () => {
      openButtonPop(meal);//it says that when the button is clicked so the "openButtonPop" function runs and it will give meal recipe.. 
  })
  loading.appendChild(recipeDiv);//this put the div(recipeDiv) inside the loading container in page.
})
 } catch (error) {
       loading.innerHTML = "<h2>Error in fetching the recipes...</h2>";

  }
}
// function to fetch Ingrediant and measurement
 const fetchIngrediant = (meal) =>{
 let ingrediantList = "";
 for(let i=1 ; i<=20 ; i++){
  const ingrediant = meal[`strIngredient${i}`];
  if (ingrediant) {
  const measure = meal[`strMeasure${i}`];
      ingrediantList += `<li>${measure} ${ingrediant}</li>`

 } 
 else {
    break;
 }
  
 }
   return ingrediantList;//when we need any kind of result so "return" is very important as In result if you didnot do this so you will get a "Undefined result"
 }
//function of event listener on recipe button

const openButtonPop = (meal) => {//we write the "meal" in bracket because it passs the function and only the "meal" is not specific word you can change it but make sure you also change the word in "${meal.strMeal}" as e.g: //  const openButtonPop = (item) => {
                                            //   console.log(item.strMeal)};
  // so  meal is just a label.You can call it recipe, dish, abc — it doesn’t matter.
  recipe_content.innerHTML = `
  <h2 class="recipeName">${meal.strMeal}</h2> 
  <h3 class="ingrediantName">⇒ Ingrediant:</h3>
  <ul class="fullList">${fetchIngrediant(meal)}</ul>
  <div>
  <h3 class="ingrediantName">⇒ Instruction:</h3>
  <p class="instruction">${meal.strInstructions}</p>
  </div>
  `
  recipe_content.parentElement.style.display = "block";
}

srch_btn.addEventListener('click',(e)=>{
 e.preventDefault();//stops the default action (like if it’s inside a <form>, it stops form from submitting).
 const searchInput = srch_input.value.trim();//you get your typed without spaces
   searchRecipe(searchInput);
});

// adding function to the recipe_icon 
recipe_icon.addEventListener('click' , () => {
recipe_content.parentElement.style.display = "none";//when you click the icon button so  it hides the popup by setting display: none.

})