$(document).ready(function(){  
  $(".search").click(function(){
  $(".search").hide("fast",function(){$(".form-control").show(),$(".button").show()});
});
  $(function(){
var winH    = $(window).height(),
    upperH  = $('.upper-bar').innerHeight(),
    navH    = $('.nav-bar').innerHeight();
$(".slider, .carousel-item1").height(winH-(upperH+navH));
});
  
})