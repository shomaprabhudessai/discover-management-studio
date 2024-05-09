console.log('12.1.12')
var config={
  config = {
    core: {},
    modules: {},
    services: {}
  }
};

config = {
  core: {
    blockedEl = [],
    delay: 100.
    modules: {
      module1: { enabled: false },
      module2: { enabled: false }
    }
  },
  modules: {
    module1: {
      delay: '400'
    },
    module2: {
      delay: '400'
    }
  }
};
(function() =>{
  console.log('init')
})()
