var cat = document.getElementById("cat");
var counterDiv = document.getElementById("counter");
var resetDiv = document.getElementById("reset");

var counter = 0;

function increaseCounter() {
//  console.log(cat + "hello");
//  counter += 1;
  console.log("counter before = " + counter);
  counterDiv.innerHTML = counter += 1;
  console.log("counter after = " + counter);
  
}

function resetCounter() {
  counter = 0;
  counterDiv.innerHTML = counter;
}

cat.addEventListener("click", increaseCounter, false);

reset.addEventListener("click", resetCounter, false);