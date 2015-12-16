// V1
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background = "white";

var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

  // This is the number we're on...
  var num = nums[i];

  // We're creating a DOM element for the number
  var elem = document.createElement('div');
  elem.textContent = num;

  // ... and when we click, alert the value of `num`
  elem.addEventListener('click', function () {
    alert(num);
    // alert num's value AT the MOMENT of the click!
    // each of these inner functions points to the same "num" variable
  });

  // finally, let's add this element to the document
  document.body.appendChild(elem);
};

// V2
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background = "white";

var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

  // This is the number we're on...
  var num = nums[i];

  // We're creating a DOM element for the number
  var elem = document.createElement('div');
  elem.textContent = num;

  // ... and when we click, alert the value of `num`
  elem.addEventListener('click', (function (numCopy) {
    return function () {
      alert(numCopy);
      
  };
  })(num));
    // an Immediately-Invoked Function Expression (IIFE), passing in num as the value for the parameter numCopy

  // finally, let's add this element to the document
  document.body.appendChild(elem);
};

// V3
// clear the screen for testing
document.body.innerHTML = '';
document.body.style.background = "white";

var nums = [1, 2, 3];

// Let's loop over the numbers in our array
for (var i = 0; i < nums.length; i++) {

  // This is the number we're on...
  var num = nums[i];

  // We're creating a DOM element for the number
  var elem = document.createElement('div');
  elem.textContent = num;

  // ... and when we click, alert the value of `num`
  elem.addEventListener('click', (function (numCopy) {
     (function () {
      alert(numCopy);
      
  })();
    // this will cause an alert to come up at the time of creating this event listener
    // unwanted
  })(num));
    // an Immediately-Invoked Function Expression (IIFE), passing in num as the value for the parameter numCopy

  // finally, let's add this element to the document
  document.body.appendChild(elem);
};