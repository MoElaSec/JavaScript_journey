//Week 53 - DOM Manipulation
//window.document -> an obj that has the entire HTML doc

// console.log(document.getElementById("name"));

// document is an instance of HTMLDocument class
// console.log(document instanceof HTMLDocument);

function sayHello() {
    var name = document.getElementById("name").value;
    var msg = "<h2>Hello, " + name + "!" + "😊</h2>";

    // document
    // .getElementById("content")
    // .textContent = msg;
    document
        .getElementById("content")
        .innerHTML = msg;

    if (name === "student") {
        var title = document
            .querySelector("#title") //? Select just like CSS selectors
            .textContent;
        title += " & Lovin it!"

        var title = document
            .querySelector("h1") // returns first h1
            .textContent = title; //? must explicitly say to change by context
    }
}