// Define the ajaxListener module
DCX.addModule('ajaxListener', function() {
    var ajax;
    var sum = 0;

    // Function to log fetch operations
    function logFetch(url) {
        console.log(`Fetching data from ${url}`);
        // Dummy fetch operation
        return ++sum;
    }

    // Function to log XHR operations
    function logXhr(url) {
        console.log(`Making XHR request to ${url}`);
        // Dummy XHR operation
        return ++sum;
    }

    // Function to log the current sum
    function logSum() {
        console.log(`Current sum is ${sum}`);
        return sum;
    }

    function logFunction() {
        console.log(`Current sum is`);
    }

    // Returning the public functions
    return {
        logFetch: logFetch,
        logXhr: logXhr,
        logWebsocket: logSum,
        logFunction: logFunction,
        version: "1.1"
    };
});