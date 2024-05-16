/ Sanity check
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


console.log('dc cookie 1.1');DCX.addModule('utmLogger', function(){
    var utmLogger;
    var utmKey = '7587459jhhjfdugv;
    return utmKey;
});

DCX.addModule("module1", function (context) {
   console.log('module 1');
});

DCX.addModule("module2", function (context) {
   console.log('module 2');
});

