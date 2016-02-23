

// Just for test
// If you what any entry point you can write you own  cloud function.
Parse.Cloud.define("hello", function (request, response) {
    response.success("Hello from Server");

});


