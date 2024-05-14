// Sanity check
if (window.DCX) {
    throw "Attempting to recreate DCX. Library may be included more than once on the page.";
}
window.DCX = (function () {
  console.log('some script');
})

(function () {
  console.log('IIFE');
}());

DCX.addService("service1", function () {
   console.log('service 1');
});
DCX.addService("service2", function () {
   console.log('service 2');
});


DCX.addModule('ajaxListener', function(){
    var ajax;
    var sum = 0;
    return sum++;
});
console.log('dom observer 1.1');
DCX.addModule("module1", function (context) {
   console.log('module 1');
});

DCX.addModule("module2", function (context) {
   console.log('module 2');
});

 config = 
    {
        core: {
            
            blockedElements: [],

      			version: {
      				author: "",
      				date: "",
      			},
        },
        services: {
            queue: {
                
            },
         
        },
        modules: {
           module1: '',
          module2: ''
        }
    };
