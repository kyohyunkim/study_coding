window.onload = function(){
///////////////////////////////////////////
// The click
$(".burger").addClass("unToggled");
$(".burger").click(function () {
  $(this).toggleClass("toggled");
  $(this).toggleClass("unToggled");
  // also open menu here...
});

}