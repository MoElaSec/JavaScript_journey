document.addEventListener("DOMContentLoaded", function (event) {
    // Unobstrusive Event binding
    document.querySelector("button").addEventListener("click", function () {
        // Call server to get the name
        $ajaxUtils.sendGetRequest("data/name.json", function (res) {
            var message = res.firstName + " " + res.lastName;

            if (res.likesSpicyFood) {
                message += " likes spicy food";
            } else {
                message += " doesn't likes spicy food";
            }

            message += " and uses ";
            message += res.numberOfDisplays;
            message += " displays for coding.";
            // any functionality as response of server must be
            document.querySelector("#content").innerHTML =
                "<h2>Hello " + message + "</h2>";
        });
    });
});
