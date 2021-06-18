(function (global) {
    //! Set up a namespace
    var ajaxUtils = {};

    //! Return an HTTP request object
    function getRequestObject() {
        if (global.XMLHttpRequest) {
            return new XMLHttpRequest();
        } else if (global.ActiveXObject) {
            // For very old IE browsers (optional)
            return new ActiveXObject("Microsoft.XMLHTTP");
        } else {
            global.alert("Ajax is not supported!");
            return null;
        }
    }

    //! Make an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest = function (
        requestUrl,
        responseHandler,
        isJsonResponse
    ) {
        //? basically we are getting new XMLHttpRequest()
        var request = getRequestObject();

        // a stage between Browser & Server
        request.onreadystatechange = function () {
            //notice how we are passing a function result instead of just the evaluation of the evaluation cuz we want it to use these values locally incase it got called multiple times = we don't want it to use  global vals that should be uniqe actually for each request
            handleResponse(request, responseHandler, isJsonResponse);
        };
        request.open("GET", requestUrl, true);
        // for POST only - remember that parameters(like name=value pairs) is send not in the header but body for POST hence why here it's null cuz we are sending a GET
        request.send(null);
    };

    //! Only calls user provided 'responseHandler' function
    // if response is ready
    // and not an error
    function handleResponse(request, responseHandler, isJsonResponse) {
        // 4 means request finished and response is ready.
        // 200 means OK success status
        if (request.readyState == 4 && request.status == 200) {
            // default to isJsonResponse=true
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }

    //! Expose utility to the global object
    global.$ajaxUtils = ajaxUtils; // just changing the var a little by using a $ just like how JQuery do
})(window);
