// var name = "Mo";
// function sayHi() {
//     console.log("Hi " + name);
// }

//let's fake a name space
// var moGretter = {}; //empty obj works as a namespace
// moGretter.name = "Mo";
// moGretter.sayHi = function () {
//     console.log("Hi " + moGretter.name);
// };

//Let's use IIFE
(function (window) {
    var moGretter = {};
    moGretter.name = "Mo";
    var greeting = "Hi"; //? Won't collide with the other greeting cuz each is being defined in their own execution context = inside th IIFE
    moGretter.sayHi = function () {
        console.log(greeting + moGretter.name);
    };

    window.moGretter = moGretter;
})(window);
