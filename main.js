var simon = document.getElementById("simon");
var simonPic = document.getElementById("simon-pic");
var bruce = document.getElementById("bruce");
var brucePic = document.getElementById("bruce-pic");
var ben = document.getElementById("ben");
var benPic = document.getElementById("ben-pic");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
  /*var x = document.querySelectorAll("img");
  for (var i = 0; i < x.length; i++) {
    x[i].className = "hide";
  }*/
  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className === "hide") {
    pic.className = "";
  } else {
    pic.className = "hide";
  }
}

/*var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value);
  var two = parseFloat(numTwo.value);
  addSum.innerHTML = "your sum is: " + (one + two);
}

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
  var one = parseFloat(numOne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;

  addSum.innerHTML = "your sum is: " + (one + two);
}*/
