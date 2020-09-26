     $("#cocktailChoice").on("click", function(){     
         // console.log(cocktailName)
         // console.log(drinkId)
         // $(this).attr("value")
         //$.post("/api/cocktailChoice")
        })
                      
        //create invitation button will take the inputs from the user and write a new html file user_id + ".html"
        $("#invitation-complete").on("click", function(event){ 
            event.preventDefault();
        //let cocktailName = $("#cocktailChoice").find("option:selected").text();

        let drinkId = $("#cocktailChoice").find("option:selected").val();
        
        let email = $("#emailId").val().trim()
        let partyName = $("#partyName").val().trim()
        let time = $("#time").val()
        let date = $("#date").val()
        let description = $("#description").val()
        let zoom = $("#zoom-link").val().trim()

        let partyData = {
            email: email,
            name: partyName,
            drinkId: drinkId,
            // drinkImage: drinkImage,
            // ingredients: ingredients,
            // directions: directions,
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
            let link = "https://cocktail-coterie.herokuapp.com" + res
            $("#link").text(link).attr("href", link)
            $("#shareModal").attr("style", "display:block")
        })
    }