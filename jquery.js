$(document).ready(function () {




    $(".main > div , body > nav ").hide(0);
    $(".modal").slideDown("slow");


    $(".navbar-brand").on("click", function () {
        $(".main > div , body > nav ").hide(0);
        $(".modal").slideDown("slow");
    });


    // Headline
    $(function () {
        $('.selector').animatedHeadline({
            animationType: 'type'
        });
    })





    // Pointer

    init_pointer();

    init_pointer({
        pointerColor: "#18D26E",
        ringSize: 15,
        ringClickSize: 10,
    });


    // On any navigation button click
    $(".nav-link").on("click", function () {

        // hide divs & nav bar
        $(".main > div , body > nav ").hide(0);

        // check if it's  home button
        if ($(this).attr("for") === "#home") {

            // show only home model
            $(".modal").slideDown("slow");

        }


        else {


            // check if it's port folio
            if ($(this).attr("for") === "#portfolio") {

                // reduce main height to 150vh
                $(".main").css("height", "120vh");
            }
            else {
                $(".main").css("height", "220vh");
            }


            if ($(this).attr("for") === "#about") {

                // counter
                $("#counter").counter({
                    duration: 15000,
                    countFrom: 0,
                });
            }

            // show navigation bar
            $("body > nav").show("slide", { direction: "up" }, 300);

            // show perticular div
            $($(this).attr("for")).show("slide", { direction: "up" }, 3000);

            // after clicking any nav option collapse automatically the hamburger in small screen
            $("body>nav>div>div.collapse").attr("class", "navbar-collapse collapse");
        }
    });


});