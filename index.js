var button = document.getElementsByClassName("button")[0];
button.addEventListener("click", function(){
  var input = document.getElementById("input").value;
  var output = "";
  for (var i = 1; i <= 10; i++) {
    output =output + input + " x " + i + " = " + input*i +"<br>";
  }
  document.getElementsByClassName("table-form")[0].innerHTML = output;
});
