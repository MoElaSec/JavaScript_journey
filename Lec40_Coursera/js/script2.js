// var name = "Mo";
// function sayHi() {
//     console.log("Hi " + name);
// }

//let's fake a name space
var moGretter = {}; //empty obj works as a namespace
moGretter.name = "Mo";
moGretter.sayHi = function () {
    console.log("Hi " + moGretter.name);
};
