
// new party] create invitation button, select cocktail -new-party.js

//select cocktial will find the selected cocktial in the database and feed the information into the new html

    $("#cocktailChoice").on("submit", function(){
        let cocktailId = $("#cocktialChoice").attr("data")

    })


//create invitation button will take the inputs from the user and write a new html file user_id + ".html"
    $("#invitation-complete").on("submit", function(){
        let partyName = $("#partyName").val().trim()
        let cocktailId = $("#cocktialChoice").val()
        let timeDate = $("#time-date").val()
        let description = $("#description").val()
        let zoom = $("#zoom-link").val().trim()
    })