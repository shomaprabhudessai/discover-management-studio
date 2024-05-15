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
      enabled: true;
    }
  },
   /* services 
    * modules
   */
  modules: {
    module1: {
      config1: ['abc'],
      config2: {
        xyz: 200
      }
    }
  }
}
