var catimage1 = document.getElementById("catimage1");
var catimage2 = document.getElementById("catimage2");

var counterDiv1 = document.getElementById("counter1");
var counterDiv2 = document.getElementById("counter2");

var resetDiv1 = document.getElementById("reset1");
var resetDiv2 = document.getElementById("reset2");

var catname1 = "Tom";
var catname2 = "Sally";

document.getElementById("catname1").innerHTML = catname1;
document.getElementById("catname2").innerHTML = catname2;


var counter1 = 0;
var counter2 = 0;

function increaseCounter1() {
//  console.log(cat + "hello");
//  counter += 1;
  console.log("counter1 before = " + counter1);
  counterDiv1.innerHTML = counter1 += 1;
  console.log("counter1 after = " + counter1);
  
}
function increaseCounter2() {
//  console.log(cat + "hello");
//  counter += 1;
  console.log("counter2 before = " + counter2);
  counterDiv2.innerHTML = counter2 += 1;
  console.log("counter2 after = " + counter2);
  
}

function resetCounter1() {
  counter1 = 0;
  counterDiv1.innerHTML = counter1;
}

function resetCounter2() {
  counter2 = 0;
  counterDiv2.innerHTML = counter2;
}

catimage1.addEventListener("click", increaseCounter1, false);
catimage2.addEventListener("click", increaseCounter2, false);


resetDiv1.addEventListener("click", resetCounter1, false);
resetDiv2.addEventListener("click", resetCounter2, false);