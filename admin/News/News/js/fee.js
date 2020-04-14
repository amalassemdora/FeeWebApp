$(document).ready(function(){  
  $(".search").click(function(){
  $(".search").hide("fast",function(){$(".form-control").show(),$(".button").show()});
});
  $(function(){
var winH    = $(window).height(),
    upperH  = $('.upper-bar').innerHeight(),
    navH    = $('.nav-bar').innerHeight();
$(".slider, .carousel-item1 ,.News-cover").height(winH-(upperH+navH));
$(".slider, .carousel-item1 ,.News-cover").width($(window).width());
});

    $(".btn-primary").click(function(){ 
    $(".btn-primary").css({
    "background-color": "#782045",
    "border-color": "#782045"
    });
        });
})