jQuery(document).ready(function () {

    $("").hide();

    $(".close").click(function () {
        $(".mobilemenu").hide();
        $("body").removeClass("mobilemenuvisible")

    });

    $(".burgermenu").click(function () {
        $(".mobilemenu").show();
        $("body").addClass("mobilemenuvisible")
    })

    // Get the button
    let mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        $("html, body").animate({
            scrollTop: "0"
        })

    }

    $("#myBtn").click(function () {
        topFunction();
    })

    

});