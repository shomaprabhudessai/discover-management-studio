var config = {
    core: {
        // Other core configurations
        // .
        // .
        // .
        modules: {
            // Other core modules
            // .
            // .
            // .
           
            domObserver: {
                enabled: true
            }
        }
    },
    modules: {
        // Other module configurations
        // .
        // .
        // .
        domObserver: {
            observeAttributes: true,
            observeChildList: true,
            observeSubtree: true,
            observeCharacterData: false,
            logChanges: true
        }
    }
};