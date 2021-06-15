// var name = "Shifra Sec";
// function sayHello() {
//     console.log("Hello, " + name);
// }

// var shifraGretter = {};
// shifraGretter.name = "shifraSec";
// shifraGretter.sayHello = function () {
//     console.log("Hello, " + shifraGretter.name);
// };

//we can achieve the same thing using IIFE
(function (window) {
    var shifraGretter = {};
    shifraGretter.name = "shifraSec";
    var greeting = "Hello, " //? notice we didn't have to use a fake namespace for the greeting as it's will be IIFE
    shifraGretter.sayHello = function () {
        console.log(greeting + shifraGretter.name);
    };

    window.shifraGretter = shifraGretter; // we exposed @shifraGretter to the global window
})(window);
