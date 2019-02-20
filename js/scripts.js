alert(5)
$(document).ready(function()  {
  $(".click-me").click(function()  {
    $("#show1").toggle();
    $("#hide1").toggle();
  });
  $(".click-me").click(function(){
    $("#show2").toggle();
    $("#hide2").toggle();
  });
  $(".click-me").click(function()  {
    $("#show3").toggle();
    $("#hide3").toggle();
  });
});
