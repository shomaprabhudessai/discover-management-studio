// Utm Logger Version 1.1
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