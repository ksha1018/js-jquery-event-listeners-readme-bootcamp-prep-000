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
  $("input#typing").on("keydown", function(key) {
    if(key.which == 71) {
      alert("G");
    }
  });
}

function submitIt() {
  $("form:input").on("submit", function() {
     alert('"Your form is going to be submitted now."');
  });
}



//define functions here

$(document).ready(function(){

// call functions here

});
