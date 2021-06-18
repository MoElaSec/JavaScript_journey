// var array = new Array();

// array[0] = "Shifra";
// array[1] = 22;
// array[2] = function(name) {
//     console.log("Hello, " + name + "!");
// };
// array[3] = {course: "HTML, CSS & JS"};

// console.log(array);
// array[2](array[0]);

// Short-Hand array creation
// var ar = ["Shifra", 22, "Sec"];
// // console.log(ar);

// ar[100] = "Something new in 100'th index";

// for (i = 0; i < ar.length; i++) {
//   if (ar[i] !== undefined) { //index [3] -> [99] are empty if you tried to print something it will be undefined
//     console.log(ar[i]);
//   }
// }

var names = ["Mo", "Ela", "Shifra"];

// var myObj = {
//     name: "Mo",
//     course: "HTML, CSS & JS",
//     place:"coursera"
// };

// for(var prop in myObj) {
//     console.log(prop + ":" + myObj[prop]);
// }

//problem with arrays{they are objects at the end}
names.greeting = "hi"; //noticef when we defiend a new property it will be looped over even though it has nothing to with the core data
for (var name in names) {
  console.log("Hello, " + names[name]);
}
