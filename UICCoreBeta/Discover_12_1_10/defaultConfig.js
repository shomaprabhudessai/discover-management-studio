// Default configuration
(function () {
    "use strict";
    // DCX is expected to be defined in the global scope i.e. window.DCX
    var config, isReinitialized = false, someObj,
      DCX = window.DCX,
      /**
       * Due to issue with lack of change event propagation on legacy IE (W3C version of UIC)
       * its mandatory to provide more specific configuration on IE6, IE7, IE8 and IE9 in legacy
       * compatibility mode. For other browsers changeTarget can remain undefined as it is
       * sufficient to listen to the change event at the document level.
       */
      changeTarget;
  
    if (DCX.getFlavor() === "w3c" && DCX.utils.isLegacyIE) {
      changeTarget = "input, select, textarea, button";
    }
  config = {
    // adding core
    core: {
      coreConfig: ['123'],
      screens: ['abc'],
      modules: {
        module1: {
          enabled: true,
          load: 300
        }
      }
    },
    /* services */
    services: {
      service1: {
        enabled: true
      }
    },
     /* services 
      * modules
     */
    modules: {
      module1: {
        config1: ['abc'],
        config2: {
          xyz: `200 ${someObj}`
        }
      }
    }
  };
  
  //----------------------------------------------------------------------------------------------------------
    //--------------------------------------------------------------------------------- Alternate FireFox Config
    //----------------------------------------------------------------------------------------------------------
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      //------------------------- Work arond for FETCH issues
      config.services.queue.asyncReqOnUnload = false;
      config.services.queue.useFetch = false;
    }
    init();
  })();
  
    
  