// Assuming we have .html file with:
//     <body>
//         <button id="btn"></button>
//         <script src="js/button.js" type="text/javascript"></script>
//     </body>

let cont = 0;

document.querySelector("#btn").innerHTML = cont;

document.addEventListener("DOMContentLoaded", function (event) {
    // Unobstrusive Event binding
    document.querySelector("#btn").addEventListener("click", function () {
        // any functionality as response of server must be
        cont++;
        document.querySelector("#btn").innerHTML = cont;
    });
});
