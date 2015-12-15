var cat = document.getElementById("cat");
var counterDiv = document.getElementById("counter");

var counter = 0;

function increaseCounter() {
//  console.log(cat + "hello");
//  counter += 1;
  console.log("counter before = " + counter);
  counterDiv.innerHTML = counter += 1;
  console.log("counter after = " + counter);
  
}

cat.addEventListener("click", increaseCounter, false);