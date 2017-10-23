$(document).ready(function(){
    $("#button").click(function(){
        $("#button").hide();
        $("#secondBlock").show(2000);
        $("#thirdBlock").show(4000);
        $("#fourthBlock").show(6000);
    });
});
function delay() {
    setTimeout(function(){ $("#full").css('background-image','url(img/birthday.jpg)'); }, 7000);
    setTimeout(function(){$("#secondBlock").text("Happy birthday!");}, 7000);
    setTimeout(function(){$("#thirdBlock").text("Happy birthday!");}, 7000);
    setTimeout(function(){$("#fourthBlock").text("Happy birthday!");}, 7000);
}
