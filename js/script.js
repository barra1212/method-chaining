$(document).ready(function() {
 //
 // add your jQuery code here

$("#button1").on("mouseenter", function(){
 $("#button1").removeClass("makeRed").addClass("makeBorder");
});

$("#button1").on("mouseleave", function(){
 $("#button1").addClass("makeRed").removeClass("makeBorder");
});

}); 
