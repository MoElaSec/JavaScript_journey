// Lec54 - Event Listener
// Now this script will load before any tag that requires any script to be loaded
document.addEventListener("DOMContentLoaded", function (event) {
    function sayHello() {
        console.log(this);
        this.textContent = "Said it!"; //changing the btn

        var name = document.getElementById("name").value;
        var msg = "<h2>Hello, " + name + "!" + "😊</h2>";

        document.getElementById("content").innerHTML = msg;
        if (name === "student") {
            var title = document.querySelector("#title").textContent;
            title += " & Lovin it!";
            var title = (document.querySelector("h1").textContent = title);
        }
    }
    document.querySelector("button").addEventListener("click", sayHello);
});

// old method
// function sayHello() {
//     console.log(this); //Now this is pointing to the actual button not the global = window
//     this.textContent = "Said it!"; //changing the btn

//     var name = document.getElementById("name").value;
//     var msg = "<h2>Hello, " + name + "!" + "😊</h2>";

//     // document
//     // .getElementById("content")
//     // .textContent = msg;
//     document.getElementById("content").innerHTML = msg;

//     if (name === "student") {
//         var title = document.querySelector("#title").textContent; //? Select just like CSS selectors
//         title += " & Lovin it!";

//         var title = (document.querySelector("h1").textContent = title); // returns first h1 //? must explicitly say to change by context
//     }
// }

//Unobtrusive event binding notice this is such a convenient way
// document.querySelector("button").addEventListener("click", sayHello);

//this way no JS is in HTML but rather in the script
// document.querySelector("button").onclick = sayHello;
