


     $("#cocktailChoice").on("click", function(){     
        cocktailId = $(this).val()
        //$.post("/api/cocktailChoice")
        let queryURL = '/api/cocktailChoice' + cocktailId
        $.ajax({
          url: queryURL,
          method: 'POST',
        }).then(
            console.log(res)
        )
     })
    
    
    
    //create invitation button will take the inputs from the user and write a new html file user_id + ".html"
    $("#invitation-complete").on("click", function(event){ 
        event.preventDefault();
        
        // let cocktailName = $("#coctailChoice").attr("name")

        let email = $("#emailId").val().trim()
        let partyName = $("#partyName").val().trim()
        let time = $("#time").val()
        let date = $("#date").val()
        let description = $("#description").val()
        let zoom = $("#zoom-link").val().trim()

        let partyData = {
            email: email,
            name: partyName,
            // cocktailName: cocktailName,
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

