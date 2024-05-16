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
         
          utmLogger: {
              enabled: true
          }
      }
  },
  modules: {
      // Other module configurations
      // .
      // .
      // .
      utmLogger: {
        logToConsole: true,
        logToServer: false,
        serverUrl: 'https://your-server-endpoint.com/log'
    }
  }
};