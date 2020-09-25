
// new party] create invitation button, select cocktail -new-party.js

//select cocktial will find the selected cocktial in the database and feed the information into the new html

    $("#cocktailChoice").on("submit", function(){
        let cocktailId = $("#cocktailChoice").attr("data")
        //$.get("/api/cocktailChoice")
    })
    
    
    
    //create invitation button will take the inputs from the user and write a new html file user_id + ".html"
    $("#invitation-complete").on("click", function(event){ 
        event.preventDefault();
        
        let cocktailName = $("#coctailChoice").attr("name")
        let cocktailId = $("#cocktailChoice").data()

        let email = $("#emailId").val().trim()
        let partyName = $("#partyName").val().trim()
        let time = $("#time").val()
        let date = $("#date").val()
        let description = $("#description").val()
        let zoom = $("#zoom-link").val().trim()
        console.log($("#cocktailChoice"))

        let partyData = {
            email: email,
            name: partyName,
            cocktailName: cocktailName,
            date: date,
            time: time,
            description: description,
            zoom:zoom
        }
        writeInvitation(partyData)
    })

    function writeInvitation(obj){
        $.post("/api/writeInvitation", obj)
        .then(function(res){
            let link = "http://localhost:8080/" + res
            $("#link").text(link).attr("href", link)
            $("#shareModal").attr("style", "display:block")
        })
    }

