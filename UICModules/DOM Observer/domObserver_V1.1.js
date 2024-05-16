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
});