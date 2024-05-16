// Dom observer V1.1
// Define the domObserver module
DCX.addModule('domObserver', function() {
    var observer;
    var changeCount = 0;

    // Function to log DOM changes
    function logDomChanges(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                console.log('A child node has been added or removed.');
            } else if (mutation.type === 'attributes') {
                console.log('The ' + mutation.attributeName + ' attribute was modified.');
            }
        }
        changeCount++;
    }

    // Function to log the number of elements in the observed container
    function logElementCount(container) {
        console.log(`The container has ${container.children.length} children.`);
        return container.children.length;
    }

    // Function to log the observer status
    function logObserverStatus() {
        console.log(`Observer has detected ${changeCount} changes so far.`);
        return changeCount;
    }

    // Function to start observing
    function startObserving(container, config) {
        if (!observer) {
            observer = new MutationObserver(logDomChanges);
            observer.observe(container, config);
            console.log('DOM observer started.');
        }
    }

    // Function to stop observing
    function stopObserving() {
        if (observer) {
            observer.disconnect();
            observer = null;
            console.log('DOM observer stopped.');
        }
    }

    // Returning the public functions
    return {
        logDomChanges: logDomChanges,
        logElementCount: logElementCount,
        logObserverStatus: logObserverStatus,
        startObserving: startObserving,
        stopObserving: stopObserving,
        version: 1.1
    };
});// Utm Logger Version 1.1
DCX.addModule('utmLogger', function() {
    var utmParams = {};

    // Function to parse UTM parameters from URL
    function parseUtmParams(url) {
        var queryString = url.split('?')[1] || '';
        var params = new URLSearchParams(queryString);
        utmParams = {
            utm_source: params.get('utm_source'),
            utm_medium: params.get('utm_medium'),
            utm_campaign: params.get('utm_campaign'),
            utm_term: params.get('utm_term'),
            utm_content: params.get('utm_content')
        };
    }

    // Function to log UTM parameters
    function logUtmParams() {
        if (config.modules.utmLogger.logToConsole) {
            console.log('UTM Parameters:', utmParams);
        }
        if (config.modules.utmLogger.logToServer && config.modules.utmLogger.serverUrl) {
            fetch(config.modules.utmLogger.serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(utmParams)
            }).then(response => {
                if (response.ok) {
                    console.log('UTM parameters logged to server successfully.');
                } else {
                    console.error('Failed to log UTM parameters to server.');
                }
            }).catch(error => {
                console.error('Error logging UTM parameters to server:', error);
            });
        }
    }

    // Function to initialize UTM logging
    function init(url) {
        parseUtmParams(url);
        logUtmParams();
    }

    // Returning the public functions
    return {
        init: init,
        logUtmParams: logUtmParams,
        version: 1.1
    };
});