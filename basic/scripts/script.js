"use strict"

$(document).ready(() => {
    let table;

        $(".open-seat").on("click", (e) => {
            table = $(e.target);
            $("form").show();
        })

        //-displays hidden text box --//
        $("button").click(function() {
            $("form").hide();  
             table.removeClass("open-seat").addClass("reserved");
        });

        $(".escape").click(function() {
            $("form").hide();
        })

        //- tool-tip box -----//

let e = $(".table");

        $(".table").hover(function userInfo() {
            $(this)
                .css('cursor', 'pointer')
                .attr('title', e);
        }, function() {
            $(this).css('cursor, auto');
        });

       

});



// function myFunction() {
//     const x = document.getElementById("form");
//     const text = "";
//     let i;
//     for(i = 0; i < x.lenght; i++) {
//         text += x.elements[i].value + "<br>";
//     }
//     // document.getElementById(".table").innerHTML = text;
// }

    
// console.log(myFunction());
