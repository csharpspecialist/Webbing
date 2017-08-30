// $(document).ready(function() {
// $("h1").click(function(){
//   $("h2").hide(1000);
// });
//
// });
//



$(document).ready(function(){
    $(".btn1").click(function(){
        $("p").hide(2000);
    });
    $(".btn2").click(function(){
        $("p").show(3000);
    });

    $("#flat").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(2000);
    });

    $("#run").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("slow");
        $("#div3").fadeOut(2000);
    });

});
