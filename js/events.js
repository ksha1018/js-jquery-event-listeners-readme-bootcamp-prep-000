function getIt() {
  $("p").on("click", function() {
    alert('Hey!');
  });
}

function frameIt() {
  $("img").on("load", function() {
    img.class = "tasty";
  });
}

function pressIt() {
  $("input").on("keydown", function(key) {
    if(key.which == 71) {
      alert("G");
    }
  });
}





//define functions here

$(document).ready(function(){

// call functions here

});
