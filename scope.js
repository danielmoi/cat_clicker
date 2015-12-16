var f1 = function () {
  var a = 1;
  var f2 = function () {
    var b = 2;
    console.log(a, b); // output: 1, 2
  }
  console.log(a, b); // ReferenceError; b is not defined
}
f1();

//

var f1 = function () {
  var a = 1;
  var b = 3;
  var f2 = function () {
    var b = 2;
    console.log(a, b); // output: 1, 2
  }
  console.log(a, b); // output: 1, 3
}
f1();

//

var o = {
  x: 10,
  m: function () {
    var x = 1;
    console.log(x, this.x);
  }
};
o.m();
