// // saved cocktails] delete cocktail  -saved-cocktail.js


//onclicks
//delete button will delete from the database

$("#delete-cocktail").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    let cocktail_id = $("#delete-cocktail").attr("data")

    $.ajax({
        method: "DELETE",
        url: "/api/cocktails/" + cocktail_id
    }).then 
})