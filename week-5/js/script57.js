document.addEventListener("DOMContentLoaded", function (event) {
    // Unobstrusive Event binding
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.txt", function (request) {
            var name = request.responseText;

            // any functionality as response of server must be
            document.querySelector("#content").innerHTML =
                "<h2>Hello " + name + "!</h2>";
        });
    });
});
