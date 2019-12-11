// jQuery effect used to show the target panel ONLY when a tab is selected

//
$( function() {
  $( "#accordion" ).accordion({
    collapsible: true
  });
} );
$( function() {
    $( "#Treatment_tabs" ).tabs(); //target the tabs in services page
} );
$( function() {
  $( "#PatientAndVisitorsTabs" ).tabs(); //target the tabs in Patient And Visitors page
} );
$( function() {
  $( "#tabs" ).tabs(); //target the tabs in navigation_bar
} );

// datepicker
$( function() {
  $( "#datepicker" ).datepicker();
} );

// This feature is used to make background animates when scroll down or up
function parallax(){
  var prlx_layer_1 = document.getElementById('prlx_layer_1');
  prlx_layer_1.style.top = -(window.pageYOffset / 6)+'px';
}
window.addEventListener("scroll", parallax, false);
var myIndex = 0;
carousel();
// End of parallax

// Automatic Slideshow - change image every 3 seconds
function carousel() {
    var i;
    var x = document.getElementsByClassName("marquee");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}
// End of the Slideshow

// jquery
$(document).ready(function(){
    // styling search engine in the banner

    $(".banner_right input[type='text']").css({"background-color":"black",
                                  "border-radius": "5px",
                                  "width": "40%",
                                  "color": "navajowhite",
                                  "opacity": ".8"});
    $(".banner_right input[type='text']").focus(function(){
                                    $(this).css({"background-color": "white",
                                                    "color": "black",
                                                    "border": "3px solid white"});
    });

    $(".banner_right input[type='text']").blur(function(){
                                  $(this).css({"background-color":"black",
                                                  "border-radius": "5px",
                                                  "border": "3px solid white",
                                                  "width": "40%",
                                                  "color": "navajowhite",
                                                  "opacity": ".8"});
    });


    //Styling the textarea in 'Contact us' page
    $("#ContactUsPage textarea").css({"border-radius": "5px",
                                        "width": "70%",
                                        "height":"140px",
                                        "resize":"none",
                                        "border": "2px solid black",
                                        "margin":"20px 0  0  5px"
    });
    //Styling the input tags in 'Contact us' page
    $("#ContactUsPage input[type='text']").css({
                                            "border-radius": "5px",
                                            "width": "70%",
                                            "height":"35px",
                                            "padding-left":"4px",
                                            "box-sizing": "border-box",
                                            "display": "inline-block",
                                            "border": "2px solid black",
                                            "margin":"20px 0  0  5px"
    });
    //Styling the droplists in 'Contact us' page
    $("#ContactUsPage .Subject").css({
                                    "padding": "0px 5px",
                                    "border-radius": "5px",
                                    "width": "70%",
                                    "height":"35px",
                                    "box-sizing": "border-box",
                                    "display": "inline-block",
                                    "border": "2px solid black",
                                    "margin":"20px 0  0  5px"
    });

    //'FOCUS' AND 'BLUR' EFFECTS IN 'Contact us' page
    $("#ContactUsPage textarea, input[type='text'], .Subject ").focus(function(){
        $(this).css({
                    "border": "1px solid gold",
                    "box-shadow": "0 0 6px gold",
                    "resize":"none"});
    });
    $("#ContactUsPage textarea, input[type='text'], .Subject").blur(function(){
        $(this).css({
                    "border": "2px solid black",
                    "box-shadow": "0 0 0px black",
                    "resize":"none"});
    });
});
