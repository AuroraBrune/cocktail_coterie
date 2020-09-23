//search for cocktails] search button, save cocktial button  -search.js

//search button will call the cocktail api and write response on the page

//save cocktial will update the database

function searchCocktailDB(drink) {
  // process.env.API_COCKTAIL
 // Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
 var queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + drink;
 $.ajax({
   url: queryURL,
   method: "GET"
 }).then(function(response) {

      // Printing the entire object to console
   console.log('A', response);
   console.log('B', response.drinks.length)
   // Constructing HTML containing the drink information
   for(i=0; i<response.drinks.length; i++){
     console.log('C', i);
     var drinkName = $("<h1>").text(response.drinks[i]['strDrink']);
       let ingredientString = ''
     
     if (response.drinks[i]['strMeasure1'] + response.drinks[i]['strIngredient1']) {
       ingredientString += response.drinks[i]['strMeasure1'] += response.drinks[i]['strIngredient1']
     }
     
     if (response.drinks[i]['strMeasure2'] + response.drinks[i]['strIngredient2']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure2'] + response.drinks[i]['strIngredient2']
     }
     
     if (response.drinks[i]['strMeasure3'] + response.drinks[i]['strIngredient3']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure3'] + response.drinks[i]['strIngredient3']
      }
     
     if (response.drinks[i]['strMeasure4'] + response.drinks[i]['strIngredient4']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure4'] + response.drinks[i]['strIngredient4']
     }
     
     if (response.drinks[i]['strMeasure5'] + response.drinks[i]['strIngredient5']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure5'] + response.drinks[i]['strIngredient5']
     }

     if (response.drinks[i]['strMeasure6'] + response.drinks[i]['strIngredient6']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure6'] + response.drinks[i]['strIngredient6']
     }

     if (response.drinks[i]['strMeasure7'] + response.drinks[i]['strIngredient7']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure7'] + response.drinks[i]['strIngredient7']
     }

     if (response.drinks[i]['strMeasure8'] + response.drinks[i]['strIngredient8']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure8'] + response.drinks[i]['strIngredient8']
     }

     if (response.drinks[i]['strMeasure9'] + response.drinks[i]['strIngredient9']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure9'] + response.drinks[i]['strIngredient9']
     }

     if (response.drinks[i]['strMeasure10'] + response.drinks[i]['strIngredient10']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure10'] + response.drinks[i]['strIngredient10']
     }

     if (response.drinks[i]['strMeasure11'] + response.drinks[i]['strIngredient11']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure11'] + response.drinks[i]['strIngredient11']
     }

     if (response.drinks[i]['strMeasure12'] + response.drinks[i]['strIngredient12']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure12'] + response.drinks[i]['strIngredient12']
     }

     if (response.drinks[i]['strMeasure13'] + response.drinks[i]['strIngredient13']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure13'] + response.drinks[i]['strIngredient13']
     }

     if (response.drinks[i]['strMeasure14'] + response.drinks[i]['strIngredient14']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure14'] + response.drinks[i]['strIngredient14']
     }

     if (response.drinks[i]['strMeasure15'] + response.drinks[i]['strIngredient15']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure15'] + response.drinks[i]['strIngredient15']
    }
    
     var ingredients = $("<h2>").text(ingredientString)
     var directions = $("<h2>").text(response.drinks[i]['strInstructions']);
     var drinkImage = $("<img>").attr("src", response.drinks[i]['strDrinkThumb']);
     let saveBttn = $("<button>").text("Save").attr("id", "save-cocktail")
     // Empty the contents of the drink-div, append the new drink content
     //$("#drink-div").empty();
     $("#drink-div").append(drinkName, drinkImage, ingredients, directions, saveBttn); 
   }
 });
}

// Event handler for user clicking the select-drink button
$("#select-drink").on("click", function(event) {
 // Preventing the button from trying to submit the form
 event.preventDefault();
 // Storing the drink name
 let inputDrink = $("#drink-input").val().trim();

 // Running the searchCocktailDB function(passing in the artist as an argument)
 searchCocktailDB(inputDrink);
});

function searchCocktailDBByIngredient(ingredient) {
// process.env.API_COCKTAIL
// Querying the Cocktail DB api for the selected drink, the ?app_id parameter is required, but can equal anything
let queryURL = "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?s=" + ingredient;
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {

     // Printing the entire object to console
     console.log('A', response);
   console.log('B', response.drinks.length)
   // Constructing HTML containing the drink information
   for(i=0; i<response.drinks.length; i++){
     console.log('C', i);
     let drinkName = $("<h1>").text(response.drinks[i]['strDrink']);
     let ingredientString = ''
     
     if (response.drinks[i]['strMeasure1'] + response.drinks[i]['strIngredient1']) {
       ingredientString += response.drinks[i]['strMeasure1'] += response.drinks[i]['strIngredient1']
     }
     
     if (response.drinks[i]['strMeasure2'] + response.drinks[i]['strIngredient2']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure2'] + response.drinks[i]['strIngredient2']
     }
     
     if (response.drinks[i]['strMeasure3'] + response.drinks[i]['strIngredient3']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure3'] + response.drinks[i]['strIngredient3']
      }
     
     if (response.drinks[i]['strMeasure4'] + response.drinks[i]['strIngredient4']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure4'] + response.drinks[i]['strIngredient4']
     }
     
     if (response.drinks[i]['strMeasure5'] + response.drinks[i]['strIngredient5']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure5'] + response.drinks[i]['strIngredient5']
     }

     if (response.drinks[i]['strMeasure6'] + response.drinks[i]['strIngredient6']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure6'] + response.drinks[i]['strIngredient6']
     }

     if (response.drinks[i]['strMeasure7'] + response.drinks[i]['strIngredient7']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure7'] + response.drinks[i]['strIngredient7']
     }

     if (response.drinks[i]['strMeasure8'] + response.drinks[i]['strIngredient8']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure8'] + response.drinks[i]['strIngredient8']
     }

     if (response.drinks[i]['strMeasure9'] + response.drinks[i]['strIngredient9']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure9'] + response.drinks[i]['strIngredient9']
     }

     if (response.drinks[i]['strMeasure10'] + response.drinks[i]['strIngredient10']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure10'] + response.drinks[i]['strIngredient10']
     }

     if (response.drinks[i]['strMeasure11'] + response.drinks[i]['strIngredient11']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure11'] + response.drinks[i]['strIngredient11']
     }

     if (response.drinks[i]['strMeasure12'] + response.drinks[i]['strIngredient12']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure12'] + response.drinks[i]['strIngredient12']
     }

     if (response.drinks[i]['strMeasure13'] + response.drinks[i]['strIngredient13']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure13'] + response.drinks[i]['strIngredient13']
     }

     if (response.drinks[i]['strMeasure14'] + response.drinks[i]['strIngredient14']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure14'] + response.drinks[i]['strIngredient14']
     }

     if (response.drinks[i]['strMeasure15'] + response.drinks[i]['strIngredient15']) {
       ingredientString += ', ' + response.drinks[i]['strMeasure15'] + response.drinks[i]['strIngredient15']
    }
    
     let drinkContain =$("<div>").attr("class", "cocktailContainer")
     let ingredients = $("<h2>").text(ingredientString)
     let directions = $("<h2>").text(response.drinks[i]['strInstructions']);
     let drinkImage = $("<img>").attr("src", response.drinks[i]['strDrinkThumb']).attr("class", "cocktailImg");
     let saveBttn = $("<button>").text("Save").attr("id", "save-cocktail") 
     // Empty the contents of the drink-div, append the new drink content
     //$("#drink-div").empty();
     
     drinkContain.append(drinkName, drinkImage, ingredients, directions, saveBttn); 
     $("#drink-div").append(drinkContain)
   }
 });
}

// Event handler for user clicking the select-drink button
$("#select-ingredient").on("click", function(event) {
 // Preventing the button from trying to submit the form
 event.preventDefault();
 // Storing the drink name
 let inputIngredient = $("#ingredient-input").val().trim();

 // Running the searchCocktailDB function(passing in the ingredient as an argument)
 searchCocktailDBByIngredient(inputIngredient);
});


  $("#save-cocktail").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
      $.post("/api/save-cocktail")
  })