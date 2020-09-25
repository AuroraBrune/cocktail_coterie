// search button will call the cocktail api and write response on the page
// save cocktial will update the database



function searchCocktailDB(drink) {
  // Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
  let queryURL = '/cocktailsdb/drinks/' + drink
  $.ajax({
    url: queryURL,
    method: 'GET',
  }).then(displayDrinks);
}


function searchCocktailDBByIngredient(ingredient) {
    // Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
  let queryURL = '/cocktailsdb/drinks/' + ingredient;
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
    let drinkName = $('<h1>').text(drink['strDrink']).attr("class", "col-lg-12 interior-box")
    let ingredientString = '';
    for (let i=0; i<20; i++) {
      if (drink['strMeasure' + i]) {
        if (i > 1) ingredientString += '<br/>';
        ingredientString += drink['strMeasure' + i] + drink['strIngredient' + i];
      }
    }

    let drinkContain = $('<div>').attr('class', 'cocktailContainer containter');
    
    let ingredients = $('<h2>').html(ingredientString).attr("class", "interior-box");
    let directions = $('<h2>').text(drink['strInstructions']).attr("class", "col").attr("class", "interior-box");
    let drinkImage = $('<img>').attr('src', drink['strDrinkThumb']).attr("class", "col");
    let saveBttn = $('<button>').text('Save').attr('class', 'cocktailSearch');

    saveBttn.on('click', function() {
      $.ajax({
        type: 'POST',
        url: '/api/save-drink',
        data: {drink: drink},
      });
      alert("Your drink has been saved!")
     })

    // append the new drink content
    drinkContain.append(drinkName, drinkImage, directions, ingredients, saveBttn);
    $('#drink-div').append(drinkContain);
  }
}