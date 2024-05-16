//Version 12.1.11
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


DCX.addModule("module1", function (context) {
   console.log('module 1');
});


(function () {
    console.log('IIFE');
  }());
