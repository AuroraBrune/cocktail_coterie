// search button will call the cocktail api and write response on the page
// save cocktial will update the database

function searchCocktailDB(drink) {
  // process.env.API_COCKTAIL
  // Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
  let queryURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + drink;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(displayDrinks);
}

function searchCocktailDBByIngredient(ingredient) {
  // process.env.API_COCKTAIL
  // Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
  let queryURL = 'https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=' + ingredient;
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(displayDrinks);
}

// Event handler for user clicking the select-drink button
$('#select-drink').on('click', function (event) {
  event.preventDefault();
  // Running the searchCocktailDB function(passing in the artist as an argument)
  searchCocktailDB($('#drink-input').val().trim());
});

// Event handler for user clicking the select-drink button
$('#select-ingredient').on('click', function (event) {
  event.preventDefault();
  // Running the searchCocktailDB function(passing in the ingredient as an argument)
  searchCocktailDBByIngredient($('#ingredient-input').val().trim());
});

function displayDrinks(response) {
  // clear the old responses
  $('#drink-div').html('');

  // Constructing HTML containing the drink information
  for (i = 0; i < response.drinks.length; i++) {
    const drink = response.drinks[i];

    // start parsing new responses
    let drinkName = $('<h1>').text(drink['strDrink']);
    let ingredientString = '';
    for (let i=0; i<20; i++) {
      if (drink['strMeasure' + i]) {
        if (i > 1) ingredientString += '<br/>';
        ingredientString += drink['strMeasure' + i] + drink['strIngredient' + i];
      }
    }

    let drinkContain = $('<div>').attr('class', 'cocktailContainer row');
    
    let ingredients = $('<h2>').html(ingredientString);
    let directions = $('<h2>').text(drink['strInstructions']);
    let drinkImage = $('<img>').attr('src', drink['strDrinkThumb']);
    let saveBttn = $('<button>').text('Save').attr('class', 'cocktailSearch');

    saveBttn.on('click', function() {
      $.ajax({
        type: 'POST',
        url: '/api/save-drink',
        data: {drink: drink},
      });
    })

    // append the new drink content
    drinkContain.append(drinkName, drinkImage, ingredients, directions, saveBttn);
    $('#drink-div').append(drinkContain);
  }
}